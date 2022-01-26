import React from "react";
import {ProfileUserComponentType} from "./ProfileUserContainer";
import {ProfileUser} from "./ProfileUser";
import {userApi} from "../../api/api";


export class ProfileUserClassComponent extends React.Component<ProfileUserComponentType> {
    componentDidMount() {
        let userID =this.props.router.params.userID
        this.props.getUser(userID)
    }

    render() {
        return (
            <ProfileUser profile={this.props.profile}/>
        )
    }
}