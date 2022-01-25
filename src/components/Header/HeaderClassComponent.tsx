import React from "react";
import {HeaderComponentType} from "./HeaderContainer";
import {Header} from "./Header";
import {loginApi, userApi} from "../../api/api";


export class HeaderClassComponent extends React.Component<HeaderComponentType> {
    componentDidMount() {
        loginApi.auth()
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
