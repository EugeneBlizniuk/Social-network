const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';


let initialState = {
    users: [
        { id: 1, followed: true, fullName: 'Yauheni B.', location: { country: 'Belarus', city: 'Minsk' } },
        { id: 2, followed: false, fullName: 'Diana S.', location: { country: 'Russia', city: 'Moscow' } },
        { id: 3, followed: true, fullName: 'Karina S.', location: { country: 'Italy', city: 'Rome' } },
    ]
}

const users = (state = initialState, action) => {
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
        default:
            return state;
    }
}

const followAC = (userId) => ({ type: FOLLOW, userId });
const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });