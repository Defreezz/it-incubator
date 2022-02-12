import {AppStateType} from "../../redux/reduxStore";

import {
    toggleFollow,
    setUsers,
    UserType,
    InitialStateType,
    setCurrentPage,
    setTotalItemUsersCount, setThrobbedFetching, setFollowInProgress, getUsers, follow
} from "../../redux/usersReducer"
import {connect} from "react-redux";
import {UsersClassComponent} from "./UsersClassComponent";
import {WithAuthRedirectComponent} from "../../utilits/WithAuthRedirectComponent";
import { compose } from "redux";
import React from "react";




type MapDispatchToProps = {
    toggleFollow:(userID:string) => void
    setUsers:(users:UserType[]) => void
    setCurrentPage:(currentPage:number)=>void
    setTotalItemUsersCount:(usersCount:number)=>void
    setThrobbedFetching:(isFetching:boolean)=>void
    setFollowInProgress:(followed:boolean,userID:string)=>void
    getUsers:(currentPage:number,pageSize:number) => void
    follow:(userId: string, followed: boolean)=>void
}
export type UsersComponentType = InitialStateType & MapDispatchToProps

const mapStateToProps = (state:AppStateType):InitialStateType => {
  return{
      users:state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount:state.usersPage.totalUsersCount,
      currentPage:state.usersPage.currentPage,
      isFetching:state.usersPage.isFetching,
      followingInProgress:state.usersPage.followingInProgress,
  }
}
// const mapDispatchToProps = ():MapDispatchToProps => {
//   return
// }

export default compose<typeof React.Component>(
    WithAuthRedirectComponent,
    connect(mapStateToProps,{
        toggleFollow,
        setUsers,
        setCurrentPage,
        setTotalItemUsersCount,
        setThrobbedFetching,
        setFollowInProgress,
        getUsers,
        follow,

    }),
    )(UsersClassComponent)






