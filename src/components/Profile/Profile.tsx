import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import myPostsClasses from "./MyPosts/MyPosts.module.css"

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