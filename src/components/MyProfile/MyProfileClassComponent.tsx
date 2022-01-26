import React from "react";
import { Navigate } from "react-router-dom";
import MyProfile from "./MyProfile";
import {ProfileComponentType} from "./MyProfileContainer";



export class MyProfileClassComponent extends React.Component<ProfileComponentType> {

    render() {
        if (!this.props.isAuth) return <Navigate to={"/login"}/>
        return (
            <MyProfile />
        )
    }
}