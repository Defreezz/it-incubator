import {v1} from "uuid";
import React from "react";


export type PostType = {
    id: string,
    message: string,
    likeCount: number
}
export type DialogType = {
    id: string,
    name: string
}
export type MessageType = {
    id: string,
    message: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newInputText:string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: {}

}
// рут типизация стора
export type StoreType = {
    _state: RootStateType,
    _callSubscriber:() => void
    subscribe:(callback:()=>void)=>void
    getState: () => RootStateType
    dispatch: (action:ALLActionTypes) => void
}
//типизация action dispatch
type AddPostActionType = {
    type:"ADD-POST"
}
type InputChangeType = {
    type: "INPUT-CHANGE"
    inputText:string
}
export type ALLActionTypes = AddPostActionType | InputChangeType



export const store:StoreType = {
    _state:  {
        profilePage: {
            posts: [
                {id: v1(), message: "jeeeeeeeeeronimo", likeCount: 12},
                {id: v1(), message: "Assssssssss", likeCount: 1},
                {id: v1(), message: "QWErty", likeCount: 22},
                {id: v1(), message: "asd", likeCount: 3},
            ],
            newInputText:""
        },
        dialogsPage: {
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
            ]

        },
        sidebar: {}


    },
    _callSubscriber () {
        console.log("hello")
    },
    //так же удалены из типизации стора
    // addPost () {
    //     const newText:PostType = {
    //         id: v1(),
    //         message:this._state.profilePage.newInputText,
    //         likeCount: 0
    //     }
    //     debugger
    //     this._state.profilePage.posts.unshift(newText)
    //     this._callSubscriber()
    // },
    // inputChange(inputText:string){
    //     this._state.profilePage.newInputText = inputText
    //     this._callSubscriber()
    // },
    getState () {
        debugger
        return this._state
    },
    subscribe (callback) {
      this._callSubscriber = callback
    },
    dispatch (action:ALLActionTypes){
        if(action.type === "ADD-POST"){
            const newText:PostType = {
                id: v1(),
                message:this._state.profilePage.newInputText,
                likeCount: 0
            }
            this._state.profilePage.posts.unshift(newText)
            this._callSubscriber()
        }else if(action.type === "INPUT-CHANGE"){
            this._state.profilePage.newInputText = action.inputText
            this._callSubscriber()
        }

    }

}







