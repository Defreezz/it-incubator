import {AppStateType} from "../../redux/reduxStore";


import {connect} from "react-redux";
import {HeaderClassComponent} from "./HeaderClassComponent";
import {auth, InitialStateType} from "../../redux/authReducer";


type MapDispatchToProps = {
    // setUserData:(userData: InitialStateType) => void
    // setAuthFetching:(isFetching: boolean)=>void
    // setAuthStatus:(isAuthStatus:boolean)=>void
    auth:()=>void

}
export type HeaderComponentType = InitialStateType & MapDispatchToProps

const mapStateToProps = (state:AppStateType):InitialStateType => {
    return{
        id:state.userAuth.id,
        email:state.userAuth.email,
        login:state.userAuth.login,
        isFetching:state.userAuth.isFetching,
        isAuth:state.userAuth.isAuth,
    }
}
// const mapDispatchToProps = ():MapDispatchToProps => {
//   return
// }
export const HeaderContainer = connect(mapStateToProps,{
    auth
})(HeaderClassComponent)




