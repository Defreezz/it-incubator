import {v1} from "uuid";
import {truncate} from "fs";
import React, {useState} from "react";
import {rerenderEntireTree} from "../render";

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
export type StateType = {
    state: RootStateType,
    addPost: (postText:string) => void
}
export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: v1(), message: "jeeeeeeeeeronimo", likeCount: 12},
            {id: v1(), message: "Assssssssss", likeCount: 1},
            {id: v1(), message: "QWErty", likeCount: 22},
            {id: v1(), message: "asd", likeCount: 3},
        ]
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


}



export const addPost = (postText:string) =>{
    const newText:PostType = {
        id: v1(),
        message:postText,
        likeCount: 0
    }
    debugger
    state.profilePage.posts.unshift(newText)
    rerenderEntireTree(state)

}

