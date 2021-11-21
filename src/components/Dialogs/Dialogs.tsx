import style from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogsPageType, DialogType, MessageType} from "../../redux/state";

type DialogsType = {
    dialogs: DialogsPageType
}


function DialogsItem(props: DialogType) {
    let path = `/dialogs/${props.id}`
    return (
        <div className={style.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

function Message(props:MessageType) {
    return (
        <div className={style.message}>{props.message}</div>
    )
}


function Dialogs(props: DialogsType) {
    const dialogsElement = props.dialogs.dialogs.map(d => <DialogsItem id={d.id} name={d.name}/>);
    const messagesElement = props.dialogs.messages.map(m => <Message id={m.id} message={m.message}/>)
    return (
        <div className={style.dialogsContainer}>
            <div className={style.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={style.messageContainer}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs