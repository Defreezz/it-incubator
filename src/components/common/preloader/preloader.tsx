import preloader from "../../../assets/trob.gif";
import React from "react";

export function Preloader() {
    return (
        <div>
            <img alt={''} style={{height: 100}} src={preloader}/>
        </div>)
}