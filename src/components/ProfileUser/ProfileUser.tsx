import React from "react";
import style from "./ProfileUser.module.css"
import {Preloader} from "../common/preloader/preloader";
import {ProfileAPIType} from "../../redux/profileReducer";

type ProfileUserType={
    profile:ProfileAPIType
}

export const ProfileUser: React.FC<ProfileUserType> = ({profile}) => {
    if (!profile) {
        return <Preloader/>
    } else {
        return (
            <div>
                <div>
                    <h1>{profile.fullName}</h1>
                </div>
                <div>
                    <img className={style.ava} src={profile.photos.large}></img>
                </div>

                <div className={style.descriptionBox}>
                    <span><b>Статус:</b> {profile.aboutMe}</span>
                </div>
            </div>
        )
    }
}

