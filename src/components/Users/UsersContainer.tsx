import {AppStateType} from "../../redux/reduxStore";

import {
    toggleFollow,
    setUsers,
    UserType,
    InitialStateType,
    setCurrentPage,
    setTotalItemUsersCount, setThrobbedFetching
} from "../../redux/usersReducer"
import {connect} from "react-redux";
import {UsersClassComponent} from "./UsersClassComponent";




type MapDispatchToProps = {
    toggleFollow:(userID:string) => void
    setUsers:(users:UserType[]) => void
    setCurrentPage:(currentPage:number)=>void
    setTotalItemUsersCount:(usersCount:number)=>void
    setThrobbedFetching:(isFetching:boolean)=>void

}
export type UsersComponentType = InitialStateType & MapDispatchToProps

const mapStateToProps = (state:AppStateType):InitialStateType => {
  return{
      users:state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount:state.usersPage.totalUsersCount,
      currentPage:state.usersPage.currentPage,
      isFetching:state.usersPage.isFetching,
      followInProgress:state.usersPage.followInProgress,
  }
}
// const mapDispatchToProps = ():MapDispatchToProps => {
//   return
// }
const UsersContainer = connect(mapStateToProps,{
    toggleFollow,
    setUsers,
    setCurrentPage,
    setTotalItemUsersCount,
    setThrobbedFetching,
})(UsersClassComponent)


export default UsersContainer

