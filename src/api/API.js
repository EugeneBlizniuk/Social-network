import * as axious from 'axios';

const DEFAULT_PAGE_SIZE = 10;
const DEFAULT_CURRENT_PAGE = 1;
const DEFAULT_REMEMBER_ME = false;
const DEFAULT_CAPTCHA = null;

const instance = axious.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "00662f5d-210d-45bf-921b-aaa41d417c74"
    }
});

export const usersAPI = {
    getUsers(currentPage = DEFAULT_CURRENT_PAGE, pageSize = DEFAULT_PAGE_SIZE) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`);
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
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile);

        return instance.put('profile/photo', formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        });
    },
    saveProfileData(profileData) {
        return instance.put(`profile`, profileData);
    }
};

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`);
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = DEFAULT_REMEMBER_ME, captcha = DEFAULT_CAPTCHA) {
        return instance.post('auth/login', { email, password, rememberMe, captcha });
    },
    logout() {
        return instance.delete('auth/login');
    }
};