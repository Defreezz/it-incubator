type FollowType = ReturnType<typeof toggleFollow>
type SetUsersACType = ReturnType<typeof setUsers>
type SetCurrentPage = ReturnType<typeof setCurrentPage>
type setTotalUsersCount = ReturnType<typeof setTotalItemUsersCount>
type setFetching = ReturnType<typeof setThrobberFetching>

type UsersReducerAction = FollowType |
    SetUsersACType |
    SetCurrentPage |
    setTotalUsersCount |
    setFetching

// type LocationType = {
//   city:string
//   country:string
// }

export type UserType = {
    id: string
    isFollowed: boolean
    name: string
    status: string
    photos: { small: string }
}
export type InitialStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,

}
export const usersReducer = (state: InitialStateType = initialState, action: UsersReducerAction): InitialStateType => {


    switch (action.type) {
        case " TOGGLE-FOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, isFollowed: !u.isFollowed} : u)
            }
        case "SET-USERS":
            return {
                ...state,
                users: action.users
            }
        case "SET-CURRENT-PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            }
        case "SET-TOTAL-USERS-COUNT":
            return {
                ...state,
                totalUsersCount: action.usersCount
            }
        case "SET-FETCHING":
            return {
                ...state,
                isFetching:action.isFetching
            }

        default:
            return state
    }
}


export const toggleFollow = (userID: string) => ({type: " TOGGLE-FOLLOW", userID} as const)
export const setUsers = (users: UserType[]) => ({type: "SET-USERS", users} as const)
export const setCurrentPage = (currentPage: number) => ({type: "SET-CURRENT-PAGE", currentPage} as const)
export const setTotalItemUsersCount = (usersCount: number) => ({type: "SET-TOTAL-USERS-COUNT", usersCount} as const)
export const setThrobberFetching = (isFetching: boolean) => ({type: "SET-FETCHING", isFetching} as const)