import React from "react";
import axios from "axios";
import Profile from "./Profile";
import {ProfileComponentType} from "./ProfileContainer";



export class ProfileClassComponent extends React.Component<ProfileComponentType> {//need fix any (возможно из-за вложенности connect)
    componentDidMount() {
        let userID =this.props.router.params.userID
        axios.get(`/profile/`+userID)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}