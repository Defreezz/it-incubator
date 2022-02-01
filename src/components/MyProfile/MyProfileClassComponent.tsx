import React from "react";
import { Navigate } from "react-router-dom";
import MyProfile from "./MyProfile";
import {ProfileComponentType} from "./MyProfileContainer";
import {WithAuthRedirectComponent} from "../../utilits/withAuthRedirectComponent";



export class MyProfileClassComponent extends React.Component<ProfileComponentType> {

    render() {
        return (
            <MyProfile />
        )
    }

}

