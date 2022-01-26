import {connect} from "react-redux";
import {InitialStateType} from "../../redux/profileReducer";
import {ProfileUserClassComponent} from "./ProfileUserClassComponent";
import {AppStateType} from "../../redux/reduxStore";
import {withRouter} from "../../utilits/withRouter";
import {getUser} from "../../redux/usersReducer";


export type MapDispatchToProps = {
    getUser:(userID:string)=>void
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

export const ProfileUserContainer = connect(mapStateToProps, {
    getUser,
})(ProfileContainerURL)

