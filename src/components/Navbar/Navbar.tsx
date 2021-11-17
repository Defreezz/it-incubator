import React from "react";
import { NavLink } from "react-router-dom";

type TypeOfNavbarProps = {
    navbar: string
    navbarItem: string
    activeItem: string
}

type X = {
    styleNavbar: TypeOfNavbarProps
}

function Navbar(props: X) {
    return (
        <nav className={props.styleNavbar.navbar}>
            <div className={`${props.styleNavbar.navbarItem} ${props.styleNavbar.activeItem}`}>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className={props.styleNavbar.navbarItem}>
                <NavLink to="/dialogs">Messages</NavLink>
            </div>
            <div className={props.styleNavbar.navbarItem}>
                <NavLink to="">News</NavLink>
            </div>
            <div className={props.styleNavbar.navbarItem}>
                <NavLink to="">Music</NavLink>
            </div>
            <div className={props.styleNavbar.navbarItem}>
                <NavLink to="">Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar