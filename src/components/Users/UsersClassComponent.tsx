import React from "react";
import {UsersComponentType} from "./UsersContainer";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/preloader";
import {setThrobbedFetching} from "../../redux/usersReducer";


export class UsersClassComponent extends React.Component<UsersComponentType> {
    componentDidMount() {
        setThrobbedFetching(true)
        if (!this.props.users.length) {
            this.props.getUsers(
                this.props.currentPage,
                this.props.pageSize,
            )
        } else this.props.setThrobbedFetching(false)

    }
    onPageChanged = (pageNumber: number) => {
        this.props.setThrobbedFetching(true)
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)

    }
    toggleFollow = (userId: string, followed: boolean) => {
        this.props.follow(userId,followed)
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
                    follow={this.toggleFollow}
                    followInProgress={this.props.followingInProgress}
                />
            </>

        )

    }
}