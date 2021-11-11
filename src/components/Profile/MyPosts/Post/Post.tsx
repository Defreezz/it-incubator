import React from "react";


type TypeClassName = {
    item: string
    likesCount: number
    message: string
}

function Post(props: TypeClassName) {
    return (
        <div className={props.item}>
            <img
                src={"https://pbs.twimg.com/profile_images/378800000509207351/48400919aaca1bc39b8f691c7662c894.jpeg"}></img>
            <span>{props.message}</span>
            <div>
                <span>Like: {props.likesCount}</span>
            </div>
        </div>

    )
}

export default Post