import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import MyPostsContainer from "./MyPosts/MyPostsContainer";



function Profile(props: any) {
    const profileInfoData = {
        img1: "https://img.uslugio.com/img3/33/3d/333d332bafec42151557d5c1a8a2d10c.jpg",
        img2: "https://s.mediasole.ru/cache/content/data/images/1486/1486067/original.jpg"
    }
    return (

        <div>
            <ProfileInfo img={profileInfoData}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile