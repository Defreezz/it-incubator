import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {MyProfileClassComponent} from "./MyProfileClassComponent";
import React from "react";
import {AppStateType} from "../../redux/reduxStore";
import {withRouter} from "../../utilits/withRouter";


export type MapDispatchToProps = {
    setUserProfile:(profile: any) => void
}
type MapStateToPropsType = {
    isAuth:boolean
}

type RouterType = {
    router:{
        params:{userID:string}
        navigate:any
        location:any
    }
}

export type ProfileComponentType = MapStateToPropsType & MapDispatchToProps & RouterType


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth:state.userAuth.isAuth,
    }
}

//замена withRouter из пятого react-router-dom
const ProfileContainerURL = withRouter(MyProfileClassComponent)

const MyProfileContainer = connect(mapStateToProps, {
    setUserProfile,
})(ProfileContainerURL)

export default MyProfileContainer
