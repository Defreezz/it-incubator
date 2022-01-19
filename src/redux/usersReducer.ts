type FollowType = ReturnType<typeof toggleFollow>
type SetUsersACType = ReturnType<typeof setUsers>
type SetCurrentPage = ReturnType<typeof setCurrentPage>
type setTotalUsersCount = ReturnType<typeof setTotalItemUsersCount>
type setFetching = ReturnType<typeof setThrobbedFetching>
type setFollowInProgress = ReturnType<typeof setFollowInProgress>

type UsersReducerAction = FollowType |
    SetUsersACType |
    SetCurrentPage |
    setTotalUsersCount |
    setFetching |
    setFollowInProgress

// type LocationType = {
//   city:string
//   country:string
// }

export type UserType = {
    id: string
    followed: boolean
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
    followInProgress:boolean
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followInProgress:false,

}
export const usersReducer = (state: InitialStateType = initialState, action: UsersReducerAction): InitialStateType => {


    switch (action.type) {
        case " TOGGLE-FOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: !u.followed} : u)
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
        case "SET-FOLLOW-PROGRESS":
            return {
                ...state,
                followInProgress:action.followed
            }

        default:
            return state
    }
}


export const toggleFollow = (userID: string) => ({type: " TOGGLE-FOLLOW", userID} as const)
export const setUsers = (users: UserType[]) => ({type: "SET-USERS", users} as const)
export const setCurrentPage = (currentPage: number) => ({type: "SET-CURRENT-PAGE", currentPage} as const)
export const setTotalItemUsersCount = (usersCount: number) => ({type: "SET-TOTAL-USERS-COUNT", usersCount} as const)
export const setThrobbedFetching = (isFetching: boolean) => ({type: "SET-FETCHING", isFetching} as const)
export const setFollowInProgress = (followed:boolean) => ({type: "SET-FOLLOW-PROGRESS",followed} as const)