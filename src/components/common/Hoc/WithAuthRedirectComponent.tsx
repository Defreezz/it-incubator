import React from "react";
import {Navigate} from "react-router-dom";
import {AppStateType} from "../../../redux/reduxStore";
import {connect} from "react-redux";
type MapStateToProps = {
    isAuth:boolean
}
const mapStateToProps = (state:AppStateType):MapStateToProps =>{
    return {
        isAuth:state.userAuth.isAuth
    }
}

export const WithAuthRedirectComponent = (Component: typeof React.Component) => {
    function RedirectComponent(props: MapStateToProps) {

        const {isAuth,...restProps} = props
        if (!isAuth) return <Navigate to={"/login"}/>

        else
            return <Component {...restProps}/>
    }

   return( connect(mapStateToProps)(RedirectComponent))
}
