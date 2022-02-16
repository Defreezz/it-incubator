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
import {
    getCurrentPageSelector, getFollowingInProgressSelector, getIsFetchingSelector,
    getPageSizeSelector,
    getTotalUsersCountSelector,
    getUsersSelector
} from "../../redux/usersSelectors";




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
      users:getUsersSelector(state),
      pageSize: getPageSizeSelector(state),
      totalUsersCount:getTotalUsersCountSelector(state),
      currentPage:getCurrentPageSelector(state),
      isFetching:getIsFetchingSelector(state),
      followingInProgress:getFollowingInProgressSelector(state),
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






