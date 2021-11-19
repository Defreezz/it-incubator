import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Navbar.module.css"

const navbarItemData = [
    {name: "Profile", path: "/profile"},
    {name: "Messages", path: "/dialogs"},
    {name: "News", path: "/news"},
    {name: "Music", path: "/music"},
    {name: "Settings", path: "/settings"}

]
const navbarItem = navbarItemData.map(n =>
    <div className={style.item}>
        {/*navData проверяет есть ли class active  у блока*/}
        <NavLink to={{pathname: n.path}} className={(navData) => navData.isActive ? style.activeLink : ''}>{n.name}</NavLink>
    </div>)


function Navbar() {
    return (
        <nav className={style.nav}>
            {navbarItem}
        </nav>
    )
}

export default Navbar