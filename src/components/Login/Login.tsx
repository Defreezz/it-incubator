import React from "react";
import {DataFormType, LoginForm} from "./LoginForm";
import {reduxForm} from "redux-form";
import {LoginComponentType} from "./LoginContainer";
import {Navigate} from "react-router-dom";

const ReduxLoginForm = reduxForm<DataFormType>({
    form: "login"
})(LoginForm)


export const Login = (props: LoginComponentType) => {
    const onSubmit = (data: DataFormType) => {
        props.login(data.email, data.password, data.rememberMe)
    }
    if (props.isAuth)
        return <Navigate to={"/myprofile"}/>
    return (
        <>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </>
    )
}