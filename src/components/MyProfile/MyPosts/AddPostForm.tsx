import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type PostForm = {
    newPostBody: string
}


 function AddPostForm(props: InjectedFormProps<PostForm>) {
    return (
        <form onSubmit={props.handleSubmit}>
                <Field
                    component={"textarea"}
                    name={"newPostBody"}
                    placeholder={"Enter your message"}
                />
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
export const PostFormRedux = reduxForm<PostForm>({form: "newPostBody"})(AddPostForm)

