import {AppStateType} from "../../redux/reduxStore";

import {
    toggleFollow,
    setUsers,
    UserType,
    InitialStateType,
    setCurrentPage,
    setTotalItemUsersCount, setThrobberFetching
} from "../../redux/usersReducer"
import {connect} from "react-redux";
import {UsersClassComponent} from "./UsersClassComponent";




type MapDispatchToProps = {
    toggleFollow:(userID:string) => void
    setUsers:(users:UserType[]) => void
    setCurrentPage:(currentPage:number)=>void
    setTotalItemUsersCount:(usersCount:number)=>void
    setThrobberFetching:(isFetching:boolean)=>void

}
export type UsersComponentType = InitialStateType & MapDispatchToProps

const mapStateToProps = (state:AppStateType):InitialStateType => {
  return{
      users:state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount:state.usersPage.totalUsersCount,
      currentPage:state.usersPage.currentPage,
      isFetching:state.usersPage.isFetching,
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
    setThrobberFetching,
})(UsersClassComponent)


export default UsersContainer

