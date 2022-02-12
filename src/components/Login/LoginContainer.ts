import {AppStateType} from "../../redux/reduxStore";
import {compose} from "redux";
import React from "react";
import {connect} from "react-redux";
import {Login} from "./Login";
import {login, logout} from "../../redux/authReducer";

export type MapDispatchToProps = {
    login:(email:string,password:string,rememberMe:boolean) => void
    logout:() => void

}
export type MapStateToProps = {
    isAuth:boolean
}

export type LoginComponentType = MapStateToProps & MapDispatchToProps


const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.userAuth.isAuth
    }
}

export const LoginContainer = compose<typeof React.Component>(
    connect(
        mapStateToProps,
        {login,logout})
)(Login)

