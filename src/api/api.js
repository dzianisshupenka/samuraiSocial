import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'c324e420-1ebb-4e65-bf90-1a7257900f46'
      },
    params: {}
});

export const setUserProfiler = (userId) => {
    return instance
            .get(`profile/` + userId)
            .then(response => {
            return response.data;
            });
}

export const setAuth = {
    me () {
        return instance.get(`auth/me`).then(response => {
        return response.data;
        });
    },
    login (email, password, rememberMe=false, captcha=null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha});
    },
    logout () {
        return instance.delete(`auth/login`);
    }
}



export const getUsers = (currentPage = 1, pageSize = 50) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => {
                    return response.data;
                })
}

export const sequrityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }
}

export const userStatus = {
    getUserStatus(userId) {
        return instance.get(`profile/status/` + userId)
        
    },
    updateUserStatus(status) {
        return instance.put(`profile/status/`, { status: status })
    },
    uploadProfilePhoto(photo) {
        const formData = new FormData();
        formData.append('image', photo)
        return instance.put('profile/photo/', formData, {
            headers: {
             'content-type': 'multipart/form-data'
            }})
    },
    saveProfileData(profile) {
        return instance.put(`profile`, profile)
    }
}

const followApi = {
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
                    .then(response => {
                        return response.data;
                    })
    },
    followUser (userId) {
        return instance.post(`follow/${userId}`)
                    .then(response => {
                        return response.data;
                    })
    }
}

 export default followApi;