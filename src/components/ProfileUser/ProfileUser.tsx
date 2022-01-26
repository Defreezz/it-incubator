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
                    {profile.photos.large
                    ? <img className={style.ava} src={profile.photos.large}></img>
                    :<img className={style.ava} src={"https://img2.freepng.ru/20180521/ocp/kisspng-computer-icons-user-profile-avatar-french-people-5b0365e4f1ce65.9760504415269493489905.jpg"}></img>
}
                </div>

                <div className={style.descriptionBox}>
                    <span><b>Статус:</b> {profile.aboutMe}</span>
                </div>
            </div>
        )
    }
}

