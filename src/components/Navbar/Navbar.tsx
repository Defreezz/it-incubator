import React from "react";

type TypeClassName = {
    className: string
    item: string
}

function Navbar(props: TypeClassName) {
    return (
        <nav className={props.className}>
            <div className={props.item}>
                <a>Profile</a>
            </div>
            <div className={props.item}>
                <a>Messages</a>
            </div>
            <div className={props.item}>
                <a>News</a>
            </div>
            <div className={props.item}>
                <a>Music</a>
            </div>
            <div className={props.item}>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar