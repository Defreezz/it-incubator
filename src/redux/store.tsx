import {v1} from "uuid";

type PostType = {
    id: string,
    message: string,
    likeCount: number
}
type DialogType = {
    id: string,
    name: string
}
 type MessageType = {
    id: string,
    message: string
}
type ProfilePageType = {
    posts: Array<PostType>
    newInputPostText:string
}
 type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newInputMessageText:string

}
type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: {}

}

// рут типизация стора
 type StoreType = {
    _state: RootStateType,
    _callSubscriber:() => void
    subscribe:(callback:()=>void)=>void
    getState: () => RootStateType
    dispatch: (action:ALLActionTypes) => void
}

 const store:StoreType = {
    _state:  {
        profilePage: {
            posts: [
                {id: v1(), message: "jeeeeeeeeeronimo", likeCount: 12},
                {id: v1(), message: "Assssssssss", likeCount: 1},
                {id: v1(), message: "QWErty", likeCount: 22},
                {id: v1(), message: "asd", likeCount: 3},
            ],
            newInputPostText:"",

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
            ],
            newInputMessageText:""

        },
        sidebar: {}


    },
    _callSubscriber () {
        console.log("hello")
    },
    getState () {
        return this._state
    },
    subscribe (callback) {
      this._callSubscriber = callback
    },
    dispatch (action){
        //profileReducer(this._state.profilePage,action)
       // dialogsReducer(this._state.dialogsPage,action)
        this._callSubscriber()
    }

}

//типизация action dispatch
type ALLActionTypes =
    {
    type:any
    inputPostText?:string
    inputMessageText?:string
}






