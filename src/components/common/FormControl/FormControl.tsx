import React, {DetailedHTMLProps, InputHTMLAttributes} from "react";
import {InjectedFormProps} from "redux-form";
import {DataFormType} from "../../Login/LoginForm";
import s from "./FormControl.module.css"

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type Input = InjectedFormProps<DataFormType> & DefaultInputPropsType

export const Input: React.FC<any> = ({meta, input, ...restProps}) => {

    const hasError = meta.touched && meta.error
    const finalClass = `${hasError ? `${s.formControl} ${s.error}` : ""}`

    return (
        <div className={finalClass}>
            <div>
                <input {...input} {...restProps} />
            </div>
            {hasError && <span className={s.error}>{meta.error}</span>}
        </div>
    )
}