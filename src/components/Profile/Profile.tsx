import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import myPostsClasses from "./MyPosts/MyPosts.module.css"

type TypeOfProfileData = {
    profileData: {
        img1: string
        img2: string
    }
}
type x = {
    styleProfile: TypeOfProfileData
}


function Profile(props: x) {
    return (
        <div>
            <div>
                <img src={props.styleProfile.profileData.img1}></img>
            </div>
            <div>
                <img src={props.styleProfile.profileData.img2}></img>
                ava
            </div>
            <MyPosts item={myPostsClasses.item}/>
        </div>
    )
}

export default Profile