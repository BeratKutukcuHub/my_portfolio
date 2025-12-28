import type React from "react";
import photo from "../../../../public/beratkutukcu.jpg"
import { useState } from "react";
import { HeroContent } from "./herocontents";
export const Hero : React.FC =()=> {
        const [state, setState] = useState<number>(0)
        return (
            <div className="w-full flex justify-center items-center h-full flex-col">
                
                <div className="flex-[0.7] h-full flex items-center p-4 mt-8">
                    <img style={{boxShadow:"0 0 10px 5px #f97316"}} src={photo} alt="my photo" className="w-40 h-40 object-cover rounded-full 
                    hover:scale-110 transition duration-300"/>
                </div>
                <div className="flex-[1.3] h-full w-full">
                    <div className="w-full px-5 md:w-[80%] md:px-0 flex flex-col justify-center items-center m-auto gap-6">
                        <h4 style={{letterSpacing:"1.5px"}} className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-8">Summary / Profil Özeti</h4>
                    <HeroContent index={state}/>
                    <span className="flex gap-2">
                      <button
                        onClick={() => setState(0)}
                        className={`cursor-pointer font-semibold py-2 px-4 rounded transition duration-300
                          ${state === 0 
                            ? "bg-orange-500 text-white" 
                            : "bg-white text-orange-500 border border-orange-500 hover:bg-orange-100"
                          }`}
                      >
                        TR
                      </button>
                      
                      <button
                        onClick={() => setState(1)}
                        className={`cursor-pointer font-semibold py-2 px-4 rounded transition duration-300
                          ${state === 1 
                            ? "bg-orange-500 text-white" 
                            : "bg-white text-orange-500 border border-orange-500 hover:bg-orange-100"
                          }`}
                      >
                        EN
                      </button>
                    </span>
                </div>
                
            </div>
        </div>
    )
}