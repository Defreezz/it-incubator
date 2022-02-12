import React from "react";
import MyProfile from "./MyProfile";
import {ProfileComponentType} from "./MyProfileContainer";


export class MyProfileClassComponent extends React.Component<ProfileComponentType> {

    componentDidMount() {
        this.props.getMyStatus(this.props.myID)
    }

    render() {
        const {myID, updateStatus, status} = this.props
        return (
            <MyProfile
                status={status}
                id={myID}
                updateStatus={updateStatus}
            />
        )
    }

}

