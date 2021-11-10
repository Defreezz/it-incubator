import React from "react";


type TypeClassName = {
    className: string
}


function Header(props: TypeClassName) {
    return (
        <header className={props.className}>
            <img
                src={'https://www.rulez-t.info/uploads/posts/2017-10/1508283588_rulez-t_info-memy-dlya-ochen-vazhnyh-peregovorov-0.png'}>
            </img>
        </header>
    )
}

export default Header