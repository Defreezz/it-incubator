
import {InitialStateType, sendMessageAC, updateInputMessageAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import { Dispatch } from "redux";

type MapStateToProps = {
    dialogsPage:InitialStateType
    isAuth:boolean
}
type MaDispatchToProps = {
    updateInputMessage: (inputText: string) => void
    sendMessage: (text: string) => void
}
export type DialogsComponentType = MapStateToProps & MaDispatchToProps

let mapStateToProps = (state:AppStateType):MapStateToProps =>{
    return {
        dialogsPage:state.dialogsPage,
        isAuth:state.userAuth.isAuth
    }
}
let mapDispatchToProps = (dispatch:Dispatch):MaDispatchToProps =>{
    return {
        updateInputMessage:(inputText:string)=>{dispatch(updateInputMessageAC(inputText))},
        sendMessage:(text:string)=>{
            if(text)
                dispatch(sendMessageAC())
            if(text)
                dispatch(updateInputMessageAC(""))
        }
    }
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer