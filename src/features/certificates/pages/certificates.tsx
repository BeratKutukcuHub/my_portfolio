import React, { useState } from "react";
import { FaExpand, FaTimes } from "react-icons/fa";

const certModules = import.meta.glob(
  "../../../../public/certificates/*.{png,jpg,jpeg}",
  { eager: true, as: "url" }
);

import educationImage from "../../../../public/educations/1.png";

const certificateImages = Object.values(certModules);

const trainings = [
  { id: 1, platform: "YouTube", subject: "C# Programming", instructor: "Gençay Yıldız" },
  { id: 2, platform: "YouTube", subject: "Object Oriented Programming (OOP)", instructor: "Gençay Yıldız" },
  { id: 3, platform: "YouTube", subject: "Redis Integration", instructor: "Gençay Yıldız" },
  { id: 4, platform: "YouTube", subject: "RabbitMQ & Message Brokers", instructor: "Gençay Yıldız" },
  { id: 5, platform: "YouTube", subject: "React Development", instructor: "Enes Bayram" },
  { id: 6, platform: "YouTube", subject: "Learn React JS - Full Course", instructor: "freeCodeCamp" },
  { id: 7, platform: "YouTube", subject: "JavaScript & TypeScript", instructor: "Enes Bayram" },
  { id: 8, platform: "YouTube", subject: "Semantic HTML & CSS", instructor: "freeCodeCamp" },
  { id: 9, platform: "TechCareer", subject: "Git & GitHub", instructor: "Ahmet Kaya" },
];

const CertificateCard: React.FC<{ image: string, index: number }> = ({ image, index }) => {
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <>
      <div 
        className="group relative bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer w-full max-w-sm aspect-[4/3]"
        onClick={() => setFullscreen(true)}
      >
        <img src={image} alt={`Certificate ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <FaExpand className="text-white text-3xl drop-shadow-lg" />
        </div>
      </div>

      {fullscreen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 animate-in fade-in duration-200 cursor-default" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => setFullscreen(false)}
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 hover:bg-white/10 rounded-full transition-all cursor-pointer"
          >
            <FaTimes size={32} />
          </button>
          <img
            src={image}
            alt={`Certificate ${index + 1}`}
            className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-md"
          />
        </div>
      )}
    </>
  );
};

export const Certificates: React.FC = () => {
  return (
    <div className="w-full max-w-7xl px-4 md:px-8 py-12 flex flex-col items-center animate-in slide-in-from-bottom-4 duration-500 fade-in">
      
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center gap-3">
           Certificates / Sertifikalar
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full place-items-center mb-20">
        {certificateImages.map((img, index) => (
          <CertificateCard key={index} image={img} index={index} />
        ))}
      </div>

      <div className="text-center mb-12 space-y-4 w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center gap-3">
           Software Trainings / Yazılım Eğitimleri
        </h2>
        <div className="max-w-5xl mx-auto w-full grid gap-8 mt-12">
            {trainings.map((edu) => (
                <div key={edu.id} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 md:p-8 rounded-2xl hover:border-orange-500/30 transition-all shadow-lg flex flex-col-reverse md:flex-row items-center gap-6 md:gap-8 group cursor-default">
                    <div className="flex-1 text-center md:text-left space-y-2 w-full">
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                           <h3 className="text-xl md:text-2xl font-bold text-white">{edu.platform}</h3>
                        </div>
                        <p className="text-orange-400 text-lg font-medium">{edu.subject}</p>
                        <p className="text-gray-400 leading-relaxed font-light">Instructor: <span className="text-gray-300 font-normal">{edu.instructor}</span></p>
                    </div>
                    <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 bg-gray-800 rounded-xl overflow-hidden border border-gray-700 group-hover:border-orange-500/30 transition-colors">
                         <img src={educationImage} alt="Training Platform" className="w-full h-full object-cover" />
                    </div>
                </div>
            ))}
        </div>
      </div>

    </div>
  );
};
