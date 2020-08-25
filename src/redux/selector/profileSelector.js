export const selectProfile = (state) => {
    return state.profilePage.profile;
}

export const selectStatus = (state) => {
    return state.profilePage.status;
}

export const selectAuthorizedUserId = (state) => {
    return state.auth.id;
}

export const selectIsAuthenticated = (state) => {
    return state.auth.isAuthenticated;
}