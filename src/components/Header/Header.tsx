import React from "react";


type TypeClassName = {
    className: string
    logo: string
    headerData: {
        img1: string
    }
}

type X = {//типизация объекта, который приходит в пропсах из APP
    styleHeader: TypeClassName
}


function Header(props: X) {
    return (
        <div className={props.styleHeader.className}>
            <div className={props.styleHeader.logo}>
                <img src={props.styleHeader.headerData.img1}></img>
            </div>
        </div>
    )
}

export default Header