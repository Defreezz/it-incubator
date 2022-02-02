import {connect} from "react-redux";
import {MyProfileClassComponent} from "./MyProfileClassComponent";
import React from "react";
import {AppStateType} from "../../redux/reduxStore";
import {compose} from "redux";
import {getMyStatus, updateStatus} from "../../redux/profileReducer";
import {WithAuthRedirectComponent} from "../../utilits/withAuthRedirectComponent";


export type MapDispatchToProps = {
    getMyStatus:(userID: string)=>void
    updateStatus:(status:string)=>void
}
type MapStateToPropsType = {
    id: string
    status:string
}

export type ProfileComponentType = MapStateToPropsType & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        id:state.userAuth.id,
        status:state.profilePage.myStatus
    }
}


export default compose<typeof React.Component>(
    WithAuthRedirectComponent,
    connect(mapStateToProps,
        {getMyStatus,updateStatus })
)(MyProfileClassComponent)

