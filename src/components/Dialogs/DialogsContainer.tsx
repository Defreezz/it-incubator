import {InitialStateType, sendMessageAC} from "../../redux/dialogsReducer";
import {DialogsClassComponent} from "./DialogsClassComponent";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {WithAuthRedirectComponent} from "../../utilits/WithAuthRedirectComponent";

type MapStateToProps = {
    dialogsPage:InitialStateType
}
type MaDispatchToProps = {
    //updateInputMessage: (inputText: string) => void
    sendMessage: (text: string) => void
}
export type DialogsComponentType = MapStateToProps & MaDispatchToProps

let mapStateToProps = (state:AppStateType):MapStateToProps =>{
    return {
        dialogsPage:state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch:Dispatch):MaDispatchToProps =>{
    return {
        //updateInputMessage:(inputText:string)=>{dispatch(updateInputMessageAC(inputText))},
        sendMessage:(text:string)=>{
            if(text)
                dispatch(sendMessageAC(text))
        }
    }
}

const AuthRedirectComponent = WithAuthRedirectComponent(DialogsClassComponent)
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer