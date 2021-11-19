import style from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

export type PostType = {
    id: number,
    message: string,
    likeCount: number
}

type DialogType = {
    id: number,
    name: string
}

type MessageType = {
    id: number,
    message: string
}

type ProfilePageType = {
    posts: Array<PostType>
}
type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: {}

}
export let state = {
    profilePage: {
        posts: [
            {id: 1, message: "jeeeeeeeeeronimo", likeCount: 12},
            {id: 2, message: "Assssssssss", likeCount: 1},
            {id: 3, message: "QWErty", likeCount: 22},
            {id: 4, message: "asd", likeCount: 3},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Ира"},
            {id: 2, name: "Света"},
            {id: 3, name: "Катя"},
            {id: 4, name: "Маша"}
        ],
        messages: [
            {id: 1, message: "4o kavo su4ki"},
            {id: 2, message: "ыыыыыыыыыыыыыы"},
            {id: 3, message: "пивет"},
            {id: 4, message: "4o "},
        ]

    },
    sidebar: {}


}

function DialogsItem(props: DialogType) {
    let path = `/dialogs/${props.id}`
    return (

        <div className={style.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

function Message(props: MessageType) {
    return (
        <div className={style.message}>{props.message}</div>
    )
}

const dialogsElement = state.dialogsPage.dialogs.map(d => <DialogsItem id={d.id} name={d.name}/>);
const messagesElement = state.dialogsPage.messages.map(m => <Message id={m.id} message={m.message}/>)

function Dialogs() {
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