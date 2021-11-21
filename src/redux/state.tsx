export type PostType = {
    id: number,
    message: string,
    likeCount: number
}

export type DialogType = {
    id: number,
    name: string
}

export type MessageType = {
    id: number,
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
    // sidebar: {}

}
let state: RootStateType = {
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
    //sidebar: {}


}

export default state