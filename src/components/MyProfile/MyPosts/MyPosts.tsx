import Post from "./Post/Post";
import style from "./Post/Post.module.css"
import React from "react";
import {MyPostsComponentType} from "./MyPostsContainer";
import {PostForm, PostFormRedux} from "./AddPostForm";

export type PostType = {
    id: string,
    message: string,
    likeCount: number
}

class MyPosts extends React.Component<MyPostsComponentType> {

    addPost(post:PostForm){
        this.props.sendPost(post.newPostBody)
        this.props.resetForm('newPostBody')
    }
    render() {

        const {posts} = this.props;
        const postsElement = posts.map((p, index) =>
            <div key={index}>
                <Post
                    id={p.id}
                    likeCount={p.likeCount}
                    message={p.message}
                />
            </div>)


        // const onInputTextChange = () => newPostElement.current && onChange(newPostElement.current.value)
        //const onAddPost = () => newPostElement.current && onClick(newPostElement.current.value)

        //JSX
        return (
            <div className={style.item}>
                <h3>my post</h3>
                <PostFormRedux onSubmit={this.addPost.bind(this)}/>
                <div>
                    new post
                </div>
                {postsElement}
            </div>
        )
    }
}

export default MyPosts