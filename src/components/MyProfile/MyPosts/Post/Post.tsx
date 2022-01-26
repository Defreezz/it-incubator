import React from "react";
import style from "./Post.module.css"
import {PostType} from "../../../../redux/profileReducer";





function Post(props:PostType) {
    const avaData = {
        img1: "https://pbs.twimg.com/profile_images/378800000509207351/48400919aaca1bc39b8f691c7662c894.jpeg"
    }
    return (
        <div className={style.item}>
            <img src={avaData.img1}></img>
            <span>{props.message}</span>
            <div>
                <span>Like: {props.likeCount}</span>
            </div>
        </div>

    )
}

export default Post