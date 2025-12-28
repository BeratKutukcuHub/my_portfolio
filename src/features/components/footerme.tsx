import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export const FooterMe = ({state,onSelect}:{state:number, onSelect:(i:number)=> void}) => {
    const loc = useLocation();
    const handleClick = (handleState : boolean) => {
        if(handleState)
        {
            onSelect(state === 4? state : state + 1);
        }
        else
        {
            onSelect(state === 1? state : state - 1);
        }
    }
    console.log(loc);
    
    const close = "text-5xl text-gray-500 transition-colors duration-300 cursor-default opacity-50"; 
    const open =  "text-5xl text-white hover:text-orange-500 transition-colors duration-300 cursor-pointer pointer-events-auto";
    const checkprev = state === 1 ? close: open;
    const checknext = state === 4 ? close: open;
    return (
        <div className="fixed top-1/2 -translate-y-1/2 left-0 z-50 w-full flex justify-between px-4 pointer-events-none">
        <FaArrowLeft  onClick={()=>handleClick(false) } 
        className={checkprev}/>
        <FaArrowRight onClick={()=>handleClick(true)} 
        className={checknext}/>
        </div>
    )
}