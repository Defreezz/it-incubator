import {connect} from "react-redux";

import {ProfileUserClassComponent} from "./ProfileUserClassComponent";
import {AppStateType} from "../../redux/reduxStore";
import {withRouterComponent} from "../common/Hoc/WithRouterComponent";
import {compose} from "redux";
import React from "react";
import {getUserProfile, InitialStateType, ProfileAPIType} from "../../redux/profileReducer";


export type MapDispatchToProps = {
    getUserProfile: (userID: string) => ProfileAPIType
    getStatus: (status: any) => void
}

type RouterType = {
    router: {
        params: { userID: string }
        navigate: any
        location: any
    }
}

export type ProfileUserComponentType = InitialStateType & MapDispatchToProps & RouterType


const mapStateToProps = (state: AppStateType): InitialStateType => {
    return {
        profile: state.profilePage.profile,
        myStatus:state.profilePage.myStatus
    }
}

 const ProfileUserContainer = compose<typeof React.Component>(
    withRouterComponent,
    connect(
        mapStateToProps,
        {getUserProfile, })
)(ProfileUserClassComponent)

export default ProfileUserContainer