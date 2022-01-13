
import {InitialStateType, sendMessageAC, updateInputMessageAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import { Dispatch } from "redux";

type MapStateToProps = {
    dialogsPage:InitialStateType
}
type MaDispatchToProps = {
    onChange: (inputText: string) => void
    onclick: (text: string) => void
}
export type DialogsComponentType = MapStateToProps & MaDispatchToProps

let mapStateToProps = (state:AppStateType):MapStateToProps =>{
    return {
        dialogsPage:state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch:Dispatch):MaDispatchToProps =>{
    return {
        onChange:(inputText:string)=>{dispatch(updateInputMessageAC(inputText))},
        onclick:(text:string)=>{
            if(text)
                dispatch(sendMessageAC())
            if(text)
                dispatch(updateInputMessageAC(""))
        }
    }
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer