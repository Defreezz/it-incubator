import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import myPostsClasses from "./MyPosts/MyPosts.module.css"

type TypeClassName = {
    className: string
    item: string
}

function Profile(props: TypeClassName) {
    return (
        <div className={props.className}>
            <div>
                <img src={"https://img.uslugio.com/img3/33/3d/333d332bafec42151557d5c1a8a2d10c.jpg"}></img>
            </div>
            <div>
                <img src={"https://s.mediasole.ru/cache/content/data/images/1486/1486067/original.jpg"}></img>
                ava
            </div>
            <MyPosts item={myPostsClasses.item}/>
        </div>
    )
}

export default Profile