import {v1} from "uuid";

type SendType = ReturnType<typeof sendPostAC>
type UpdateInputPostType = ReturnType<typeof UpdateInputPostAC>
type ProfileReducerAction = SendType|UpdateInputPostType

export type PostType = {
    id: string,
    message: string,
    likeCount: number
}
export type InitialStateType = {
    posts: PostType[]
    newInputPostText:string
}

let initialState = {
    posts: [
        {id: v1(), message: "jeeeeeeeeeronimo", likeCount: 12},
        {id: v1(), message: "Assssssssss", likeCount: 1},
        {id: v1(), message: "QWErty", likeCount: 22},
        {id: v1(), message: "asd", likeCount: 3},
    ],
    newInputPostText:""}

export const profileReducer = (state:InitialStateType = initialState, action:ProfileReducerAction) :InitialStateType=> {
    switch (action.type) {
        case "ADD-POST":
            return {
                ...state,
                posts:[{id: v1(),message: state.newInputPostText,likeCount: 0},...state.posts]
            }
        case "INPUT-CHANGE":
            return {
                ...state,
                newInputPostText:action.inputPostText
            }
        default: return state
    }
}

//action creators  (типа колбэков, возвращают объект экшен)

export const sendPostAC = () => ({type:"ADD-POST"} as const)

export const UpdateInputPostAC= (newPostElement:string)  =>{  debugger;
   return  {type:"INPUT-CHANGE",inputPostText:newPostElement} as const
}