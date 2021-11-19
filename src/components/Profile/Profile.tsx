import React from "react";
import MyPosts from "./MyPosts/MyPosts";

import ProfileInfo from "./ProfileInfo/ProfileInfo";

// type TypeOfProfileData = { //типизация того, что вложено в объект
//     profileData: {
//         img1: string
//         img2: string
//     }
// }
type x = { //типизация объекта, который приходит в пропсах из APP
    styleProfile: {
        profileData: {
            img1: string
            img2: string
        }
    }
}


function Profile(props: x) {
    return (
        <div>
            <ProfileInfo img={props.styleProfile.profileData}/>
            <MyPosts />
        </div>
    )
}

export default Profile