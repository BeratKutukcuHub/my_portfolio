import { useState } from "react";
import { FaArrowRight, FaArrowLeft, FaExpand, FaTimes } from "react-icons/fa";

const imageModules = import.meta.glob(
  "../../../../public/projects/**/**/*.{png,jpg,jpeg}",
  { eager: true, as: "url" }
);

const projectImages: Record<string, string[]> = Object.entries(imageModules).reduce<
  Record<string, string[]>
>((acc, [path, url]) => {
  const projectKey = path.split("/projects/")[1].split("/")[0];
  acc[projectKey] ??= [];
  acc[projectKey].push(url as string);
  return acc;
}, {});

interface Project {
  id: number;
  key: string;
  title: string;
  tech: string[];
  description?: string; 
}

const projects: Project[] = [
  { id: 1, key: "project_1", title: "ASP.NET Version & Response Caching", tech: ["ASP.NET", "MSSQL"] },
  { id: 2, key: "project_2", title: "Medium Clone Project", tech: ["ASP.NET", "MongoDB"] },
  { id: 3, key: "project_3", title: "Koziamedia Reactjs Project", tech: ["Reactjs", "Redux Toolkit", "React Router"] },
  { id: 4, key: "project_4", title: "Vanillajs Project", tech: ["Vanillajs", "CSS", "HTML"] },
  { id: 5, key: "project_5", title: "IBM Clone Landing Page", tech: ["HTML", "CSS"] },
  { id: 6, key: "project_6", title: "E-Commerce API", tech: ["C#", ".NET Core", "SQL"] },
  { id: 7, key: "project_7", title: "Identity & JWT Auth", tech: ["ASP.NET", "EF Core", "JWT", "MSSQL"] },
  { id: 8, key: "project_8", title: "Cache & Pub/Sub Messaging", tech: ["ASP.NET", "Redis", "RabbitMQ", "SMTP"] },
  { id: 9, key: "project_9", title: "Frontmentor Challenges", tech: ["JavaScript", "HTML", "CSS"] },
  { id: 10, key: "project_10", title: "Webapi Onion Architecture", tech: ["ASP.NET", "EF Core", "JWT", "MSSQL"] },
  { id: 11, key: "projects_11", title: "Webapi Full Featured", tech: ["ASP.NET", "EF Core", "JWT", "MSSQL"] },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const images: string[] = projectImages?.[project.key] ?? [];
  const [current, setCurrent] = useState<number>(0);
  const [fullscreen, setFullscreen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const nextSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrent((prev) => (prev + 1) % images.length);
  };
  
  const prevSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  if (images.length === 0) return null;

  return (
    <>
      <div 
        className="group relative bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 w-full max-w-sm flex flex-col cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-full aspect-video overflow-hidden bg-gray-950">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${project.title} screenshot ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />

          <div className={`absolute inset-0 flex items-center justify-between px-2 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}>
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-black/50 text-white hover:bg-orange-500/80 transition-colors backdrop-blur-sm cursor-pointer"
            >
              <FaArrowLeft size={14} />
            </button>
            
            <div className="flex gap-2">
                 <button
                onClick={() => setFullscreen(true)}
                 className="p-2 rounded-full bg-black/50 text-white hover:bg-orange-500/80 transition-colors backdrop-blur-sm cursor-pointer"
                >
                <FaExpand size={14} />
                </button>
                 <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-black/50 text-white hover:bg-orange-500/80 transition-colors backdrop-blur-sm cursor-pointer"
            >
              <FaArrowRight size={14} />
            </button>
            </div>
           
          </div>
          
           <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md text-xs text-white/80 font-mono">
              {current + 1} / {images.length}
            </div>
        </div>

        <div className="p-5 flex flex-col gap-3 flex-1 bg-gray-900/50 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors line-clamp-1">
            {project.title}
          </h2>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tech.map((t, i) => (
              <span 
                key={i} 
                className="px-2 py-1 text-xs font-medium text-orange-300 bg-orange-900/20 border border-orange-500/20 rounded-md"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {fullscreen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 animate-in fade-in duration-200">
          <button
            onClick={() => setFullscreen(false)}
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 hover:bg-white/10 rounded-full transition-all cursor-pointer"
          >
            <FaTimes size={24} />
          </button>

          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-orange-400 p-4 hover:bg-white/5 rounded-full transition-all cursor-pointer"
          >
            <FaArrowLeft size={32} />
          </button>

          <img
            src={images[current]}
            alt={project.title}
            className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-md"
          />

          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-orange-400 p-4 hover:bg-white/5 rounded-full transition-all cursor-pointer"
          >
            <FaArrowRight size={32} />
          </button>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 font-mono">
            {current + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
};

export const Projects: React.FC = () => {
  return (
    <div className="w-full max-w-7xl px-4 md:px-8 py-12 flex flex-col items-center animate-in slide-in-from-bottom-4 duration-500 fade-in">
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
          Featured Projects
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          A showcase of my technical journey, featuring backend architectures, 
          full-stack applications, and modern web interfaces.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full place-items-center sm:place-items-stretch">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};