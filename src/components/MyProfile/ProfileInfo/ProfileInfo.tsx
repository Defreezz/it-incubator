import React, {ChangeEvent} from "react";
import style from "./ProfileInfo.module.css"
import {EditableSpan} from "./EditableSpan";
import {ProfileAPIType} from "../../../redux/profileReducer";
import {MyProfileType} from "../../../redux/myProfileReducer";

type ProfileInfoType = {
    updateMyProfile: (updateModel: ProfileAPIType) => void,
    updateMyStatus: (status: string) => void
    status: string
    savePhoto: (file: File, userID: string) => void
    myProfile:MyProfileType
}

class ProfileInfo extends React.Component<ProfileInfoType> {

    handlerChangePhoto(e: ChangeEvent<HTMLInputElement>) {

        if (e.target.files && e.target.files.length) {
            this.props.savePhoto(e.target.files[0], this.props.myProfile.userId)

        }
    }
    handlerChangeAboutMeArea(value:string){
        this.props.updateMyProfile({...this.props.myProfile,aboutMe:value})
    }

    render() {
        let {status, updateMyStatus,myProfile } = this.props
        return (
            <div>
                <div className={style.descriptionBox}>
                    <div>
                        <img alt={"avatar"} src={myProfile.photos.large} className={style.ava}/>
                    </div>
                    <input onChange={this.handlerChangePhoto.bind(this)} type={"file"}/>
                    <EditableSpan name={"Status"} onChange={updateMyStatus} value={status}/>
                    <EditableSpan name={"About me"} onChange={this.handlerChangeAboutMeArea.bind(this)} value={myProfile.aboutMe}/>
                </div>
            </div>
        )
    }
}

export default ProfileInfo