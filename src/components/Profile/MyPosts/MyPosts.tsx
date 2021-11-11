import Post from "./Post/Post";
import postsClasses from "./Post/Post.module.css"


type TypeClassName = {
    item: string
}

function MyPosts(props: TypeClassName) {
    return (
        <div>
            my post
            <div>
                new post
            </div>
            <Post item={postsClasses.item} likesCount={23} message={"Здароу"}/>
            <Post item={postsClasses.item} likesCount={2} message={"Чо каво"}/>
            <Post item={postsClasses.item} likesCount={55} message={"123"}/>
        </div>
    )
}

export default MyPosts