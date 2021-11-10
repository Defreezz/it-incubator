import React from "react";


type TypeClassName = {
    //className: string
    item: string
}

function Post(props: TypeClassName) {
    return (
        <div>
            <div className={props.item}>
                <img src={"https://pbs.twimg.com/profile_images/378800000509207351/48400919aaca1bc39b8f691c7662c894.jpeg"}></img>
                post
            </div>
        </div>
    )
}

export default Post