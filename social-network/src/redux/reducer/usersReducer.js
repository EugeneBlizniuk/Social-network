const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
    users: [
        {
            id: 1, imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/f/fc/%D0%97%D0%B0%D0%B1%D0%BE%D0%BB%D0%BE%D1%86%D0%BA%D0%B8%D0%B9_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B9_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B5%D0%B2%D0%B8%D1%87.jpg/373px-%D0%97%D0%B0%D0%B1%D0%BE%D0%BB%D0%BE%D1%86%D0%BA%D0%B8%D0%B9_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B9_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B5%D0%B2%D0%B8%D1%87.jpg',
            followed: true, fullName: 'Yauheni B.', location: { country: 'Belarus', city: 'Minsk' }
        },
        {
            id: 2, imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/f/fc/%D0%97%D0%B0%D0%B1%D0%BE%D0%BB%D0%BE%D1%86%D0%BA%D0%B8%D0%B9_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B9_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B5%D0%B2%D0%B8%D1%87.jpg/373px-%D0%97%D0%B0%D0%B1%D0%BE%D0%BB%D0%BE%D1%86%D0%BA%D0%B8%D0%B9_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B9_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B5%D0%B2%D0%B8%D1%87.jpg',
            followed: false, fullName: 'Diana S.', location: { country: 'Russia', city: 'Moscow' }
        },
        {
            id: 3, imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/f/fc/%D0%97%D0%B0%D0%B1%D0%BE%D0%BB%D0%BE%D1%86%D0%BA%D0%B8%D0%B9_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B9_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B5%D0%B2%D0%B8%D1%87.jpg/373px-%D0%97%D0%B0%D0%B1%D0%BE%D0%BB%D0%BE%D1%86%D0%BA%D0%B8%D0%B9_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B9_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B5%D0%B2%D0%B8%D1%87.jpg',
            followed: true, fullName: 'Karina S.', location: { country: 'Italy', city: 'Rome' }
        },
    ]
}

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
            return { ...state, users: [...state.users, ...action.users] }
        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;