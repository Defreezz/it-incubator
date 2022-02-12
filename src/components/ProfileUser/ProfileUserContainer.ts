import {connect} from "react-redux";

import {ProfileUserClassComponent} from "./ProfileUserClassComponent";
import {AppStateType} from "../../redux/reduxStore";
import {withRouterComponent} from "../../utilits/WithRouterComponent";
import {compose} from "redux";
import React from "react";
import { getUserProfile, InitialStateType} from "../../redux/profileReducer";


export type MapDispatchToProps = {
    getUser: (userID: string) => void
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

export const ProfileUserContainer = compose<typeof React.Component>(
    withRouterComponent,
    connect(
        mapStateToProps,
        {getUser: getUserProfile, })
)(ProfileUserClassComponent)

