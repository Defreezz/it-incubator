import React from "react";
import style from "./ProfileUser.module.css"
import {Preloader} from "../common/preloader/preloader";
import {ProfileAPIType} from "../../redux/profileReducer";
import {ProfileStatus} from "../MyProfile/ProfileInfo/ProfileStatus";

type ProfileUserType = {
    profile: ProfileAPIType
}

export class ProfileUser extends React.Component<ProfileUserType> {

    render() {
        if (!this.props.profile) {
            return <Preloader/>
        } else {
            return (
                <div>
                    <div>
                        <h1>{this.props.profile.fullName}</h1>
                    </div>
                    <div>
                        {this.props.profile.photos.large
                            ? <img className={style.ava} src={this.props.profile.photos.large}></img>
                            : <img className={style.ava}
                                   src={"https://img2.freepng.ru/20180521/ocp/kisspng-computer-icons-user-profile-avatar-french-people-5b0365e4f1ce65.9760504415269493489905.jpg"}></img>
                        }
                    </div>

                    <div className={style.descriptionBox}>
                        <span><b>Обо мне:</b> {this.props.profile.aboutMe}</span>
                        <br/>
                        <span><b>Статус:</b><ProfileStatus status={this.props.profile.status}/></span>
                    </div>
                </div>
            )
        }
    }

}