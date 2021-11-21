import Post from "./Post/Post";
import style from "./Post/Post.module.css"
import {PostType} from "../../../redux/state";


type PostsType = {
    posts:Array<PostType>
}




function MyPosts(props:PostsType) {
    const postsElement = props.posts.map(p => <Post id={p.id} likeCount={p.likeCount} message={p.message}/>)
    return (
        <div className={style.item}>
            <h3>my post</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div>
                new post
            </div>
            {postsElement}
        </div>
    )
}

export default MyPosts