
import {ThunkType} from "./reduxStore";
import {auth} from "./authReducer";

type InitializeDataType = ReturnType<typeof setInitialize>

export type AppReducerAction =
    | InitializeDataType

export type InitialStateType = {
    isInit:boolean
}

export const appReducer = (state: InitialStateType = {isInit:false}, action: AppReducerAction): InitialStateType => {

    switch (action.type) {
        case "INITIALIZE-THE-APP":
            return {
                ...state,
                isInit:true,
            }
        default:
            return state
    }
}


export const setInitialize = () => ({type: "INITIALIZE-THE-APP"} as const)
//thunks

export const initializeApp = (): ThunkType => dispatch =>{
     let promise = dispatch(auth())
    Promise.all([promise])
        .then(()=>{dispatch(setInitialize())})

}



