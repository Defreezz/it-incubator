import React from "react";
import style from "./ProfileInfo.module.css"
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoType = {
    id: string
    updateStatus: (status: string) => void
    status: string
}

class ProfileInfo extends React.Component<ProfileInfoType> {

    render() {
        const profileInfoData = {
            img1: "https://img.uslugio.com/img3/33/3d/333d332bafec42151557d5c1a8a2d10c.jpg",
            img2: "https://s.mediasole.ru/cache/content/data/images/1486/1486067/original.jpg"
        }
        return (
            <div>

                <div>
                    <img className={style.topImg} src={profileInfoData.img1}></img>
                </div>
                <div className={style.descriptionBox}>
                    <img className={style.ava} src={profileInfoData.img2}></img>
                    <ProfileStatus updateStatus={this.props.updateStatus} status={this.props.status}/>
                </div>
            </div>
        )
    }
}

export default ProfileInfo