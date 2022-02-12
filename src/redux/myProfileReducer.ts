import {v1} from "uuid";

type SendType = ReturnType<typeof sendPost>



export type MyProfileReducerAction = SendType



export type PostType = {
    id: string,
    message: string,
    likeCount: number
}


export type InitialStateType = {
    posts: PostType[]
}

let initialState: InitialStateType = {
    posts: [
        {id: v1(), message: "jeeeeeeeeeronimo", likeCount: 12},
        {id: v1(), message: "Assssssssss", likeCount: 1},
        {id: v1(), message: "QWErty", likeCount: 22},
        {id: v1(), message: "asd", likeCount: 3},
    ],


}

export const myProfileReducer = (state: InitialStateType = initialState, action: MyProfileReducerAction): InitialStateType => {
    switch (action.type) {
        case "ADD-POST":
            return {
                ...state,
                posts: [{id: v1(), message: action.newPostText, likeCount: 0}, ...state.posts]
            }
        default:
            return state
    }
}


export const sendPost = (newPostText:string) => ({type: "ADD-POST",newPostText} as const)


