import {AppStateType} from "../../redux/reduxStore";

import {toggleFollowAC, setUsersAC, UserType} from "../../redux/usersReducer"
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {UsersClassComponent} from "./UsersClassComponent";



type MapStateToProps = {
    users:UserType[]
}
type MapDispatchToProps = {
    toggleFollow:(userID:string) => void
    setUsers:(users:UserType[]) => void
}
export type UsersComponentType = MapStateToProps & MapDispatchToProps

const mapStateToProps = (state:AppStateType):MapStateToProps => {
  return{
      users:state.usersPage.users
  }
}
const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToProps => {
  return{
      toggleFollow:(userID) => {dispatch(toggleFollowAC(userID))},
      setUsers:(users) => {dispatch(setUsersAC(users))}
  }
}
const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersClassComponent)


export default UsersContainer

