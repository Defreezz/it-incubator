import React from "react";
import style from "./ProfileInfo.module.css"
import {Preloader} from "../../common/preloader/preloader";
import {ProfileAPItype} from "../../../redux/profileReducer";

type X = {
    profile: ProfileAPItype
    img: {
        img1: string
        img2: string
    }
}

function ProfileInfo(props: X) {

    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <div>

                <div>
                    <img className={style.topImg} src={props.img.img1}></img>
                </div>
                <div>
                    <img src={props.profile.photos.large}></img>
                    <span>{props.profile.aboutMe}</span>
                </div>

                <div className={style.descriptionBox}>
                    <img className={style.ava} src={props.img.img2}></img>
                    ava
                </div>
            </div>
        )
    }
}

export default ProfileInfo