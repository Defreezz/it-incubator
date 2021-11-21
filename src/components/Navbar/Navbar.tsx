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
type NavbarItemType = {
    linkTO: string
    names: string
}
function NavbarItem (props:NavbarItemType){
    let path = `${props.linkTO}` //{{pathname: props.linkTO}} 2ой вариант, записывается в комоненту <NavLink/> в to. to={{pathname: props.linkTO}}
    return(
    <div className={style.item}>
        {/*navData проверяет есть ли class active  у блока*/}
        <NavLink to={path} className={(navData) => navData.isActive ? style.activeLink : ''}>{props.names}</NavLink>
    </div>)}

const navbarElement = navbarItemData.map(n => <NavbarItem linkTO={n.path} names={n.name}/>)

function Navbar() {
    return (
        <nav className={style.nav}>
            {navbarElement}
        </nav>
    )
}

export default Navbar