export const selectUsers = (state) => {
    return state.usersPage.users;
}

export const selectPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const selectCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const selectTotalCount = (state) => {
    return state.usersPage.totalCount;
}

export const selectIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const selectFollowingInProcess = (state) => {
    return state.usersPage.followingInProcess;
}