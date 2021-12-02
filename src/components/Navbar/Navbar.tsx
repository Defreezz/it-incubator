import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Navbar.module.css"
import {v1} from "uuid";

const navbarItemData = [
    {id:v1(), name: "Profile", path: "/profile"},
    {id:v1(),name: "Messages", path: "/dialogs"},
    {id:v1(),name: "News", path: "/news"},
    {id:v1(),name: "Music", path: "/music"},
    {id:v1(),name: "Settings", path: "/settings"},
   // {id:v1(),name: "Sidebar", path: "/sidebar"},
]
type NavbarItemType = {
    linkTO: string
    names: string
}


const navbarElement = navbarItemData.map(n =>
    <NavbarItem linkTO={n.path} names={n.name}/>)

function NavbarItem (props:NavbarItemType){
    let path = props.linkTO
    return(
    <div className={style.item}>
        {/*navData проверяет есть ли class active  у блока*/}
        <NavLink
            to={path}
            className={(navData) => navData.isActive ? style.activeLink : ''}>
            {props.names}
        </NavLink>
    </div>)}



function Navbar() {
    return (
        <nav className={style.nav}>
            {navbarElement}
        </nav>
    )
}

export default Navbar