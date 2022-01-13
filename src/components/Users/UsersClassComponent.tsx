import React from "react";
import {UsersComponentType} from "./UsersContainer";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/preloader";


export class UsersClassComponent extends React.Component<UsersComponentType> {
    componentDidMount() {
        this.props.setThrobberFetching(true)
        if (!this.props.users.length) {
            axios.get(`/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setThrobberFetching(false)
                    this.props.setUsers(response.data.items)
                    this.props.setTotalItemUsersCount(response.data.totalCount)
                })
        }
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setThrobberFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setThrobberFetching(false)
                this.props.setUsers(response.data.items)


            })
    }

    render() {
        return (
            <>

                {this.props.isFetching ? <Preloader/> : null}

                <Users
                    currentPage={this.props.currentPage}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    onPageChanged={this.onPageChanged}
                    toggleFollow={this.props.toggleFollow}
                />
            </>

        )

    }
}