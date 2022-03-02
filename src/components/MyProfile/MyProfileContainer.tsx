import {connect} from "react-redux";
import {MyProfileClassComponent} from "./MyProfileClassComponent";
import React from "react";
import {AppStateType} from "../../redux/reduxStore";
import {compose} from "redux";

import {WithAuthRedirectComponent} from "../common/Hoc/WithAuthRedirectComponent";
import {ProfileAPIType} from "../../redux/profileReducer";
import {getMyStatus, MyProfileType, savePhoto, updateMyProfile, updateMyStatus} from "../../redux/myProfileReducer";


export type MapDispatchToProps = {
    updateMyProfile:(updateModel:Partial<ProfileAPIType>)=>void,
    getMyStatus?:(userID: string)=>void
    updateMyStatus:(status:string)=>void
    savePhoto:(file:File,userID:string)=>void
}
type MapStateToPropsType = {
    profile: MyProfileType
    status:string
}

export type ProfileComponentType = MapStateToPropsType & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.myProfilePage.myProfile,
        status:state.myProfilePage.myStatus
    }
}


export default compose<typeof React.Component>(
    WithAuthRedirectComponent,
    connect(mapStateToProps,
        {getMyStatus, updateMyStatus,savePhoto, updateMyProfile })
)(MyProfileClassComponent)

