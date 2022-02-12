import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";

export type AddMessageForm = {
    newMessageBody: string
}

function AddMessageForm(props: InjectedFormProps<AddMessageForm>) {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                component={"textarea"}
                name={"newMessageBody"}
                placeholder={"Enter your message"}
            />
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>;
}

export const AddMessageFormRedux = reduxForm<AddMessageForm>({
    form: "newMessageBody"
})(AddMessageForm)