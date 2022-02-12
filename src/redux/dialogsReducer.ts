import {v1} from "uuid";

// type UpdateInputMessageType =  ReturnType<typeof updateInputMessageAC>
type SendMessageType =  ReturnType<typeof sendMessageAC>
export type DialogsReducerAction =  | SendMessageType

export type DialogType = {
    id: string,
    name: string
}
export type MessageType = {
    id: string,
    message: string
}
export type InitialStateType =  {
    dialogs:DialogType[]
    messages:MessageType[]
}

const initialState:InitialStateType = {
    dialogs: [
        {id: v1(), name: "Ира"},
        {id: v1(), name: "Света"},
        {id: v1(), name: "Катя"},
        {id: v1(), name: "Маша"}
    ],
    messages: [
        {id: v1(), message: "4o kavo su4ki"},
        {id: v1(), message: "ыыыыыыыыыыыыыы"},
        {id: v1(), message: "пивет"},
        {id: v1(), message: "4o "},
    ],

}

export const dialogsReducer = (state:InitialStateType = initialState, action:DialogsReducerAction):InitialStateType => {
    switch (action.type) {
        case "SEND-MESSAGE":
            return {
            ...state,
            messages:[...state.messages,{id:v1(),message: action.newMessageBody}]
        }
        // case "INPUT-MESSAGE-CHANGE":
        //     return {
        //         ...state,
        //         newInputMessageText: action.inputMessageText
        //     }
        default: return state
    }
}

//action creators  (типа колбэков, возвращают объект экшен)

export const sendMessageAC = (newMessageBody:string) => ({type:"SEND-MESSAGE",newMessageBody} as const)

// export const updateInputMessageAC = (newMessageElement:string) => (
//     {type:"INPUT-MESSAGE-CHANGE", inputMessageText:newMessageElement} as const)






