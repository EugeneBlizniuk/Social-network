import * as axious from 'axios';

const instance = axious.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "00662f5d-210d-45bf-921b-aaa41d417c74"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page${currentPage}&count${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`);
    },
    getProfile(userId) {
        console.warn('it is going to be deprecated, use getProfile from profileAPI');
        return profileAPI.getProfile(userId);
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status });
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    }
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    }
};