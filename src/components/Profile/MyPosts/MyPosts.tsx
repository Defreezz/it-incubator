import Post from "./Post/Post";
import postsClasses from "./Post/Post.module.css"


type TypeClassName = {
    //className: string
    item: string
}

function MyPosts(props: TypeClassName) {
    return (
        <div>
            my post
            <div>
                new post
            </div>
            <Post item={postsClasses.item}/>
            <Post item={postsClasses.item}/>
            <Post item={postsClasses.item}/>
        </div>
    )
}

export default MyPosts