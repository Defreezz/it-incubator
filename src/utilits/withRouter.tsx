import React from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";



export const withRouter = (Component:typeof React.Component) => {
    return (props: object) => {
        let params = useParams();
        let navigate = useNavigate()
        let location = useLocation()
        return (
            <Component {...props} router={{params, navigate, location}} />
    )
    }
}