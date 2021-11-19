import Post from "./Post/Post";
import style from "./Post/Post.module.css"
import {state} from "../../Dialogs/Dialogs";




const postsElement = state.profilePage.posts.map(p => <Post item={style.item} id={p.id} likesCount={p.likeCount} message={p.message}/>)

function MyPosts() {
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