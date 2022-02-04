import React from "react";
import {DataFormType, LoginForm} from "./LoginForm";
import {reduxForm} from "redux-form";

const ReduxLoginForm = reduxForm<DataFormType>({
    form:"login"
})(LoginForm)


export const Login = () => {
    const onSubmit = (data:DataFormType) =>{
        console.log(data)
    }
    return(
        <>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </>
    )

}