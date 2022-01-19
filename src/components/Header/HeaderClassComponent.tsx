import React from "react";
import {HeaderComponentType} from "./HeaderContainer";
import {Header} from "./Header";
import axios from "axios";
import {setAuthStatus} from "../../redux/authReducer";

export const instance = {//пофиксится на axios create
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "48f39b3b-88cd-43fa-b014-7ded7a46fb5b"
    }
};

export class HeaderClassComponent extends React.Component<HeaderComponentType> {
    componentDidMount() {
        axios.get(`/auth/me`, instance)
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setUserData(response.data.data)
                    this.props.setAuthStatus(true)
                }
            })
    }

    render() {
        return (
            <Header
                userLogin={this.props.login}
                isAuth={this.props.isAuth}
            />

        )
    }
}
