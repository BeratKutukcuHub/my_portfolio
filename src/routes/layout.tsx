import { type JSX } from "react";
import Navbar from "../features/landing/components/navbar";
import { FooterMe } from "../features/components/footerme"
import { useLocation, useNavigate } from "react-router-dom";
import type { RoutingProps } from "./routing";

export const Layout = ({
  allPages,
  children,
}: {
  allPages: RoutingProps[];
  children: JSX.Element;
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentIndex = allPages.findIndex((x) => x.path === location.pathname);
  console.log(currentIndex);
  return (

    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 min-h-screen flex flex-col w-full">
      <Navbar state={currentIndex} onSelect={(i) => navigate(allPages[i].path)} />
      <div className="flex-1 w-full">
        {children}
      </div>
      {location.pathname !== "/" && (
        <FooterMe state={currentIndex} onSelect={(i) => navigate(allPages[i].path)} />
      )}
    </div>
  );
};
