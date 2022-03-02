import React from "react";
import {ProfileComponentType} from "./MyProfileContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


export class MyProfileClassComponent extends React.Component<ProfileComponentType> {

    render() {
        const {profile, updateMyStatus,updateMyProfile,savePhoto, status} = this.props
        return (
            <div>
                <ProfileInfo
                    myProfile={profile}
                    status={status}
                    updateMyStatus={updateMyStatus}
                    updateMyProfile={updateMyProfile}
                    savePhoto={savePhoto}
                />
                <MyPostsContainer/>
            </div>
        )
    }

}

