import React from "react";
import style from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogType, MessageType,} from "../../redux/dialogsReducer";
import {DialogsComponentType} from "./DialogsContainer";


function DialogsItem(props: DialogType) {
    let path = `/dialogs/${props.id}`

    return (
        <div>
            <NavLink className={style.dialog} to={path}>{props.name}</NavLink>
        </div>
    )
}

function Message(props: MessageType) {
    return (
        <div className={style.message}>{props.message}</div>
    )
}

export class DialogsClassComponent extends React.Component<DialogsComponentType> {
    render() {
        const dialogsElement = this.props.dialogsPage.dialogs.map (d => <DialogsItem key={d.id} id={d.id} name={d.name}/>);
        const messagesElement = this.props.dialogsPage.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)
        const newMessageElement = React.createRef<HTMLTextAreaElement>()
        const inputMessageChange = () => newMessageElement.current && this.props.updateInputMessage(newMessageElement.current.value)
        const sendMessageCallback = () => newMessageElement.current && this.props.sendMessage(newMessageElement.current.value)
        return (
            <div className={style.dialogsContainer}>
                <div className={style.dialogsItems}>
                    {dialogsElement}
                </div>
                <div className={style.messageContainer}>
                    {messagesElement}
                    <div>
                    <textarea
                        ref={newMessageElement}

                        onChange={ inputMessageChange}
                        value={this.props.dialogsPage.newInputMessageText}
                    > </textarea>
                    </div>
                    <div>
                        <button onClick={sendMessageCallback}>Send message</button>
                    </div>
                </div>
            </div>)
    }
}

// function Dialogs({dialogsPage, sendMessage, updateInputMessage, isAuth}: DialogsComponentType) {
//     const dialogsElement = dialogsPage.dialogs.map(d => <DialogsItem key={d.id} id={d.id} name={d.name}/>);
//     const messagesElement = dialogsPage.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)
//
//     const newMessageElement = React.createRef<HTMLTextAreaElement>()
//
//     const inputMessageChange = () => newMessageElement.current && updateInputMessage(newMessageElement.current.value)
//     const sendMessageCallback = () => newMessageElement.current && sendMessage(newMessageElement.current.value)
//
//
//     return (
//         <div className={style.dialogsContainer}>
//             <div className={style.dialogsItems}>
//                 {dialogsElement}
//             </div>
//             <div className={style.messageContainer}>
//                 {messagesElement}
//                 <div>
//                     <textarea
//                         ref={newMessageElement}
//                         onChange={inputMessageChange}
//                         value={dialogsPage.newInputMessageText}
//                     > </textarea>
//                 </div>
//                 <div>
//                     <button onClick={sendMessageCallback}>Send message</button>
//                 </div>
//             </div>
//         </div>
//     )
// }
//
// export default Dialogs