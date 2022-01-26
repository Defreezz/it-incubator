import {connect} from "react-redux";
import {InitialStateType, ProfileAPIType, setUserProfile} from "../../redux/profileReducer";
import {ProfileUserClassComponent} from "./ProfileUserClassComponent";
import {withRouter} from "../MyProfile/MyProfileContainer";
import {AppStateType} from "../../redux/reduxStore";


export type MapDispatchToProps = {
    setUserProfile:(profile: ProfileAPIType) => void
}

type RouterType = {
    router:{
        params:{userID:string}
        navigate:any
        location:any
    }
}

export type ProfileUserComponentType = InitialStateType & MapDispatchToProps & RouterType


const mapStateToProps = (state: AppStateType): InitialStateType => {
    return {
        profile: state.profilePage.profile,
        newInputPostText:state.profilePage.newInputPostText,
        posts:state.profilePage.posts,

    }
}

const ProfileContainerURL = withRouter(ProfileUserClassComponent)

export const ProfileUserContainer = connect(mapStateToProps, {setUserProfile})(ProfileContainerURL)

