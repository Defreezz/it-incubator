import Post from "./Post/Post";
import style from "./Post/Post.module.css"
import {PostType} from "../../../redux/state";
import React from "react";


type PostsType = {
    posts:Array<PostType>
    AddPost: (postText:string) => void
}

function MyPosts({posts, AddPost}:PostsType) {

    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPostCallback = () => {
        if(newPostElement.current)
           AddPost(newPostElement.current.value)
        if(newPostElement.current)
            newPostElement.current.value = "";
    }
    const post = (p:PostType) => <Post id={p.id} likeCount={p.likeCount} message={p.message}/>
    const postsElement = posts.map(p => post(p))

    //JSX
    return (
        <div className={style.item}>
            <h3>my post</h3>
            <div>
                <textarea ref={newPostElement} ></textarea>
            </div>
            <div>
                <button onClick={addPostCallback}>Add post</button>
            </div>
            <div>
                new post
            </div>
            {postsElement}
        </div>
    )
}

export default MyPosts