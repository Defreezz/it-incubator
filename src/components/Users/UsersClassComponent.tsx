import React from "react";
import {UsersComponentType} from "./UsersContainer";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/preloader";
import {userApi} from "../../api/api";


export class UsersClassComponent extends React.Component<UsersComponentType> {
    componentDidMount() {
        this.props.setThrobbedFetching(true)
        if (!this.props.users.length) {
            userApi.getUsers(this.props.currentPage, this.props.pageSize)
                .then(data => {
                    this.props.setThrobbedFetching(false)
                    this.props.setUsers(data.items)
                    this.props.setTotalItemUsersCount(data.totalCount)
                })
        } else {
            this.props.setThrobbedFetching(false)
        }

    }
    onPageChanged = (pageNumber: number) => {
        this.props.setThrobbedFetching(true)
        this.props.setCurrentPage(pageNumber)
        userApi.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setThrobbedFetching(false)
                this.props.setUsers(data.items)
            })
    }
    followApi = (userId:string)=>{
        userApi.follow(userId)
            .then(response => {if (response.data.resultCode===0) this.props.toggleFollow(userId)})
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
                    followApi={this.followApi}
                />
            </>

        )

    }
}