import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import {Input} from "../common/FormControl/FormControl";
import {requiredField} from "../../utilits/validators/validators";
import s from "./Login.module.css"

export type DataFormType = {
    email: string
    password: string
    rememberMe: boolean
}


export const LoginForm: React.FC<InjectedFormProps<DataFormType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={"email"}
                    placeholder={"email"}
                    component={Input}
                    validate={requiredField}
                />
            </div>
            <div>
                <Field
                    type={"password"}
                    name={"password"}
                    placeholder={"Password"}
                    component={Input}
                    validate={requiredField}
                />

            </div>
            {props.error && <div className={s.error}>
                {props.error}
            </div>}
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