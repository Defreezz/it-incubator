import React from "react";
import style from "./ProfileInfo.module.css"

type X = {
    img:{
        img1:string
        img2:string
    }
}

function ProfileInfo(props: X) {
    return (
        <div>
            <div >
                <img className={style.topImg} src={props.img.img1}></img>
            </div>
            <div className={style.descriptionBox}>
                <img className={style.ava} src={props.img.img2}></img>
                ava
            </div>
        </div>
    )
}

export default ProfileInfo