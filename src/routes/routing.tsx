import { Route, Routes } from "react-router-dom"
import type { JSX } from "react"
import { Layout } from "./layout";

export interface RoutingProps {
    children: JSX.Element,
    path: string
}
export interface RoutingComponentProps {
    pages: RoutingProps[]; 
}
export const Routing = ({pages}: RoutingComponentProps) => {
    return (
        <Routes>
            {
                pages.map((pageItem: RoutingProps) => {
                    return (
                        <Route  path={pageItem.path} element={<Layout allPages={pages} children={pageItem.children}/>} />
                    )
                })
            }
        </Routes>
    )
}