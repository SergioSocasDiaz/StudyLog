import {NavLink} from "react-router";
import React from "react";


type BasicAnchorProps = {
    children:React.ReactNode;
    className?:string, // Si hay es un string pero puede que no haya
    path:string,
};

export function BasicAnchor({children,className,path}:BasicAnchorProps){
    return(
        <NavLink className={className} to={path}>
            {children}
        </NavLink>
    )
}