import React from "react";
import h from "./Header.module.css"

const headerData = 'https://www.rulez-t.info/uploads/posts/2017-10/1508283588_rulez-t_info-memy-dlya-ochen-vazhnyh-peregovorov-0.png'



function Header() {
    return (
        <div className={h.header}>
            <div className={h.logo}>
                <img src={headerData}></img>
            </div>
        </div>
    )
}

export default Header