import {connect} from "react-redux";
import {InitialStateType, setUserProfile} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/reduxStore";
import {ProfileClassComponent} from "./ProfileClassComponent";
import React from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";


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


const mapStateToProps = (state: any): any => {
    return {
        profile: state.profilePage.profile,
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
        debugger
        return (
            <Component {...props} router={{params, navigate, location}}/>
        )
    }
}
//
const ProfileContainerURL = withRouter(ProfileClassComponent)

const ProfileContainer = connect(mapStateToProps, {
    setUserProfile,
})(ProfileContainerURL)

export default ProfileContainer
