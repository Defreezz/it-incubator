import React from "react";
import MyProfile from "./MyProfile";
import {ProfileComponentType} from "./MyProfileContainer";



export class MyProfileClassComponent extends React.Component<ProfileComponentType> {

    render() {
        return (
            <MyProfile />
        )
    }
}