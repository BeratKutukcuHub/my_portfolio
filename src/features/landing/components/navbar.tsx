import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Navbar: React.FC<{ state: number, onSelect: (index: number) => void }> = ({state, 
  onSelect}) => {
  const [open, setOpen] = useState<boolean>(false);
  const stateOn = "block text-orange-500 text-lg font-medium w-full";
  const stateOff = "block text-gray-800 text-lg font-medium hover:text-orange-500 hover:scale-105 transition duration-300 w-full";
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        open &&
        target.closest("#menu-panel") === null &&
        target.closest("#hamburger-btn") === null
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <>
      <Link
        to="/"
        className="absolute top-4 left-4 z-50 text-white hover:text-orange-500 transition-colors duration-300 p-1"
      >
        <FaHome size={32} />
      </Link>

      <button
        id="hamburger-btn"
        onClick={() => setOpen(!open)}
        className={`absolute top-4 right-4 z-50 flex flex-col justify-between w-8 h-6 cursor-pointer focus:outline-none transition-colors duration-300 ${
          open
            ? "bg-gray-400 p-1 rounded"
            : "bg-gray-200 p-1 rounded hover:bg-gray-300"
        }`}
      >
        <span className="block h-1 bg-gray-800 rounded"></span>
        <span className="block h-1 bg-gray-800 rounded"></span>
        <span className="block h-1 bg-gray-800 rounded"></span>
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-400"></div>
      )}

      <div
        id="menu-panel"
        className={`fixed top-0 left-0 w-full bg-gray-100/95 backdrop-blur-sm shadow-lg transition-all duration-400 ease-in-out flex flex-row z-50 ${
          open
            ? "translate-y-0 opacity-100 h-[30vh]"
            : "-translate-y-full opacity-0 h-[40vh] pointer-events-none"
        }`}
      >
        <div className="w-20"></div>

        <div className="flex flex-col gap-3 mt-16 w-full px-6 justify-end mb-5">
          <Link onClick={()=> onSelect(1)} className={`${state === 1? stateOn : stateOff}`} 
          to="/aboutme" >About Me / Hakkımda</Link>
          <Link onClick={()=> onSelect(2)} className={`${state === 2? stateOn : stateOff}`} 
          to="/skills" >Skills / Yetenekler</Link>
          <Link onClick={()=> onSelect(3)} className={`${state === 3? stateOn : stateOff}`} 
          to="/projects" >Projects / Projeler</Link>
          <Link onClick={()=> onSelect(4)} className={`${state === 4? stateOn : stateOff}`} 
          to="/certificates" >Certificates / Sertifikalar</Link>
        </div>
      </div>
    </>
  );
};





export default Navbar;