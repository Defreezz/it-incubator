import React from "react";
import MyProfile from "./MyProfile";
import {ProfileComponentType} from "./MyProfileContainer";


export class MyProfileClassComponent extends React.Component<ProfileComponentType> {

    componentDidMount() {
        this.props.getMyStatus(this.props.id)
    }

    render() {
        const {id, updateStatus, status} = this.props
        return (
            <MyProfile
                status={status}
                id={id}
                updateStatus={updateStatus}
            />
        )
    }

}

