import React from "react";
import {HeaderComponentType} from "./HeaderContainer";
import {Header} from "./Header";


export class HeaderClassComponent extends React.Component<HeaderComponentType> {
    componentDidMount() {
        this.props.auth()
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
