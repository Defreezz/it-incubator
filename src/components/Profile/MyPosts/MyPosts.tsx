import Post from "./Post/Post";
import style from "./Post/Post.module.css"
import {ALLActionTypes, PostType} from "../../../redux/state";
import React, {ChangeEvent, ChangeEventHandler} from "react";


type PostsType = {
    posts:Array<PostType>
    dispatch: (action:ALLActionTypes) => void
    newInputText:string;
}

function MyPosts({posts, dispatch, newInputText}:PostsType) {

    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPostCallback = () => {
        debugger
        if(newPostElement.current)
          dispatch({type:"ADD-POST"})
        if(newPostElement.current)
            dispatch({type: "INPUT-CHANGE", inputText:""})
    }
    const post = (p:PostType) => <Post id={p.id} likeCount={p.likeCount} message={p.message}/>
    const postsElement = posts.map(p => post(p))

    const inputTextChange  = () => {
        if(newPostElement.current)
            dispatch({type:"INPUT-CHANGE", inputText:newPostElement.current.value})
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