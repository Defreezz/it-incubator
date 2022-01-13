import React from "react";
import Profile from "./Profile";
import axios from "axios";


export class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
        axios.get(`/profile/2`)
            .then(response => {
                this.props.setThrobberFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalItemUsersCount(response.data.totalCount)
            })
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}