import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import MyPostsContainer from "./MyPosts/MyPostsContainer";

type MyProfile = {
    id:string
    updateStatus:(status:string)=>void
    status:string
}

function MyProfile({id,updateStatus,status}:MyProfile) {

    return (

        <div>
            <ProfileInfo
                status={status}
                id={id}
                updateStatus={updateStatus}
            />
            <MyPostsContainer/>
        </div>
    )
}

export default MyProfile