import {connect} from "react-redux";
import {InitialStateType, setUserProfile} from "../../redux/profileReducer";
import {MyProfileClassComponent} from "./MyProfileClassComponent";
import React from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {AppStateType} from "../../redux/reduxStore";


export type MapDispatchToProps = {
    setUserProfile:(profile: any) => void
}

type RouterType = {
    router:{
        params:{userID:string}
        navigate:any
        location:any
    }
}

export type ProfileComponentType = InitialStateType & MapDispatchToProps & RouterType


const mapStateToProps = (state: AppStateType): InitialStateType => {
    return {
        profile:state.profilePage.profile,
        newInputPostText: state.profilePage.newInputPostText,
        posts:state.profilePage.posts,
    }
}

//замена withRouter из пятого react-router-dom
export function withRouter (Component:typeof React.Component) {
    return (props: object) => {
        let params = useParams();
        let navigate = useNavigate()
        let location = useLocation()
        return (
            <Component {...props} router={{params, navigate, location}}/>
        )
    }
}
//
const ProfileContainerURL = withRouter(MyProfileClassComponent)

const MyProfileContainer = connect(mapStateToProps, {
    setUserProfile,
})(ProfileContainerURL)

export default MyProfileContainer
