import Post from "./Post/Post";
import style from "./Post/Post.module.css"
import {PostType} from "../../../redux/state";
import React, {ChangeEvent, ChangeEventHandler} from "react";


type PostsType = {
    posts:Array<PostType>
    AddPost: () => void
    InputChange:(inputText:string) => void
    newInputText:string;
}

function MyPosts({posts, AddPost, newInputText,InputChange}:PostsType) {

    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPostCallback = () => {
        debugger
        if(newPostElement.current)
           AddPost()
        if(newPostElement.current)
            InputChange("")
    }
    const post = (p:PostType) => <Post id={p.id} likeCount={p.likeCount} message={p.message}/>
    const postsElement = posts.map(p => post(p))

    const inputTextChange  = () => {
        if(newPostElement.current)
            InputChange(newPostElement.current.value)
    }
    //JSX
    return (
        <div className={style.item}>
            <h3>my post</h3>
            <div>
                <textarea onChange={inputTextChange} ref={newPostElement} value={newInputText} ></textarea>
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