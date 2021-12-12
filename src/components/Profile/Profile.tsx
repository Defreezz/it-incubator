import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfileType = {
    profilePage: ProfilePageType
    addPost: () => void
    inputChange:(inputText: string) => void
}

function Profile(props: ProfileType) {
    const profileInfoData = {
        img1: "https://img.uslugio.com/img3/33/3d/333d332bafec42151557d5c1a8a2d10c.jpg",
        img2: "https://s.mediasole.ru/cache/content/data/images/1486/1486067/original.jpg"
    }
    return (
        <div>
            <ProfileInfo img={profileInfoData}/>
            <MyPosts
                posts={props.profilePage.posts}
                newInputText={props.profilePage.newInputText}
                AddPost={props.addPost}
                InputChange={props.inputChange}
            />
        </div>
    )
}

export default Profile