
import { Routing, type RoutingProps } from "./routes/routing";
import type { PropsWithChildren } from "react";
import { Landing } from "./features/landing/pages/landing.tsx";
import { Aboutme } from "./features/aboutme/pages/aboutme.tsx";
import { Skills } from "./features/skills/pages/skills.tsx";
import { Projects } from "./features/projects/pages/Projects.tsx";
import { Certificates } from "./features/certificates/pages/certificates.tsx";
export interface PageProps {
  title: string;
  }

export const Page : React.FC<PropsWithChildren> =({children})=> {
    return (<div className="flex flex-col items-center pt-0 pb-10 w-full overflow-x-hidden">
              {children}
    </div>)
}
const Pages: RoutingProps[] = [
  { path: "/", children: <Landing/> },
  { path: "/aboutme", children: <Page children={<Aboutme/>}/> },
  { path: "/skills", children: <Page children={<Skills/>}/> },
  { path: "/projects", children: <Page children={<Projects/>}/> },
  { path: "/certificates", children: <Page children={<Certificates/>}/> },
];
export default function App() {
  return (
    <>
    <Routing pages={[...Pages]}/>
    </>
  )
}
