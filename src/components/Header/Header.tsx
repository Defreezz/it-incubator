import React from "react";


type TypeClassName = {
    className: string
    headerData: {
        img1: string
    }
}

type X = {
    styleHeader: TypeClassName
}


function Header(props: X) {
    return (
        <header className={props.styleHeader.className}>
            <img
                src={props.styleHeader.headerData.img1}>
            </img>
        </header>
    )
}

export default Header