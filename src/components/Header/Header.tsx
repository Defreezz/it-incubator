import h from "./Header.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const headerIMG = 'https://www.rulez-t.info/uploads/posts/2017-10/1508283588_rulez-t_info-memy-dlya-ochen-vazhnyh-peregovorov-0.png'

type HeaderDataType = {
    isAuth: boolean
    userLogin: string | null
}

export const Header: React.FC<HeaderDataType> = ({isAuth, userLogin}) => {
    return (
        <div className={h.header}>
            <div className={h.loginBlock}>
                {isAuth
                    ?

                    <div className={h.logo}>
                        <span >{userLogin}</span>
                        <img src={headerIMG}></img>

                    </div>

                    : <NavLink to={"/login"}>Login</NavLink>
                }
            </div>


        </div>
    )
}