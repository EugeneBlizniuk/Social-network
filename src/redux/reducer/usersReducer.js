const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
    users: [],
    totalCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: false
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
        case UNFOLLOW:
            let stateCopy = {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        const isFollowed = !u.followed;
                        return { ...u, followed: isFollowed }
                    }
                    return u;
                })
            };
            return stateCopy;
        case SET_USERS:
            return { ...state, users: action.users }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_COUNT:
            return { ...state, totalCount: action.totalCount }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export default usersReducer;