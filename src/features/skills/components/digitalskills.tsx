import type { Skill } from "../pages/skills";

export default function DigitalSkillsProgress({skills}: {skills:Skill[]}) {
  return (
    <div className="mt-12 w-full min-h-[80vh] flex flex-col justify-center items-center max-w-6xl mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Skills / Yetenekler</h2>
      <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto text-sm">
        Backend mimarilerinden modern frontend teknolojilerine kadar uzanan geniş bir teknik yetenek seti ile ölçeklenebilir ve performanslı çözümler geliştiriyorum.
      </p>
      <div className="flex flex-wrap justify-center gap-4 w-full ">
        {skills.map((skill, index) => {
          const angle = Math.round((skill.percent / 100) * 360);
          return (
            <div key={index} className="p-[1px] rounded-xl bg-gradient-to-br from-orange-500 to-white hover:scale-105 transition duration-300 shadow-xl group cursor-pointer w-full max-w-[220px]">
            <div className="h-full bg-gray-900 rounded-xl p-4 text-center backdrop-blur-sm">
              <div className="relative w-16 h-16 mx-auto mb-3">
                <div
                  className="w-full h-full rounded-full"
                  style={{
                    background: `conic-gradient(#f97316 ${angle}deg, #e5e7eb ${angle}deg)`,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-semibold text-gray-600">{skill.percent}%</span>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-1 text-white group-hover:text-orange-400 transition-colors">{skill.title}</h3>
              <p className="text-xs text-gray-400 leading-tight">{skill.description}</p>
            </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}