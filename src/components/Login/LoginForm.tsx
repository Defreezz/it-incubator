import React from "react";
import {Field, InjectedFormProps} from "redux-form";
export type DataFormType = {
    login:string
    password:string
    rememberMe:boolean
}

export const LoginForm:React.FC<InjectedFormProps<DataFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={"login"}
                    placeholder={"Login"}
                    component={"input"}
                />
            </div>
            <div>
                <Field
                    name={"password"}
                    placeholder={"Password"}
                    component={"input"}
                />
            </div>
            <div>
                <Field
                    name={"rememberMe"}
                    type={"checkbox"}
                    component={"input"}
                /> Remember me
            </div>
            <div>
                <button>Sign in</button>
            </div>
        </form>
    )

}