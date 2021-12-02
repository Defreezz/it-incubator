import Post from "./Post/Post";
import style from "./Post/Post.module.css"
import {PostType} from "../../../redux/state";
import React from "react";


type PostsType = {
    posts:Array<PostType>
    addPost: (postText:string) => void
}

function MyPosts(props:PostsType) {

    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPostCallback = () => {
        if(newPostElement.current)
        props.addPost(newPostElement.current.value)
        if(newPostElement.current)
        newPostElement.current.value = "";
    }
    const postsElement = props.posts.map(p => <Post id={p.id} likeCount={p.likeCount} message={p.message}/>)
    return (
        <div className={style.item}>
            <h3>my post</h3>
            <div>
                <textarea ref={newPostElement}  onChange={()=>{}}></textarea>
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