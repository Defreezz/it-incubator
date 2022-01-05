
type FollowType =  ReturnType<typeof toggleFollowAC>
type SetUsersACType =  ReturnType<typeof setUsersAC>
type UsersReducerAction = FollowType | SetUsersACType

// type LocationType = {
//   city:string
//   country:string
// }

export type UserType = {
  id:string
  followed:boolean
  name:string
  status:string
  photos:{small:string}
}
export type InitialStateType =  {
  users:UserType[]
}

const initialState:InitialStateType = {
  users:[]
}
export const usersReducer = (state:InitialStateType = initialState,action:UsersReducerAction):InitialStateType => {


  switch (action.type) {
    case " TOGGLE-FOLLOW":
      return {
        ...state,
        users:state.users.map(u => u.id === action.userID?{...u,followed:!u.followed}:u)
      }
    case "SET-USERS":
      return {
      ...state,
        users:[...state.users,...action.users]
      }

    default: return state
  }
}


export const toggleFollowAC = (userID:string) => ({type:" TOGGLE-FOLLOW",userID} as const)
export const setUsersAC = (users:UserType[]) =>({type:"SET-USERS",users} as const)