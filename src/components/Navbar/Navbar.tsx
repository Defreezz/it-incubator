import React from "react";
import {NavLink} from "react-router-dom";

type TypeOfNavbarProps = {
    navbar: string
    navbarItem: string
    activeLink: string
}

type X = { //типизация объекта, который приходит в пропсах из APP
    styleNavbar: TypeOfNavbarProps
}

function Navbar(props: X) {
    return (
        <nav className={props.styleNavbar.navbar}>
            <div className={props.styleNavbar.navbarItem}>


                {/*navData проверяет есть ли class active  у блока*/}

                <NavLink to="/profile"
                         className={(navData) => navData.isActive ? props.styleNavbar.activeLink : ''}>Profile</NavLink>
            </div>
            <div className={props.styleNavbar.navbarItem}>
                <NavLink to="/dialogs"
                         className={(navData) => navData.isActive ? props.styleNavbar.activeLink : ''}>Messages</NavLink>
            </div>
            <div className={props.styleNavbar.navbarItem}>
                <NavLink to="/news"
                         className={(navData) => navData.isActive ? props.styleNavbar.activeLink : ''}>News</NavLink>
            </div>
            <div className={props.styleNavbar.navbarItem}>
                <NavLink to="/music"
                         className={(navData) => navData.isActive ? props.styleNavbar.activeLink : ''}>Music</NavLink>
            </div>
            <div className={props.styleNavbar.navbarItem}>
                <NavLink to="/settings"
                         className={(navData) => navData.isActive ? props.styleNavbar.activeLink : ''}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar