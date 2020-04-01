import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'c324e420-1ebb-4e65-bf90-1a7257900f46'
      },
    params: {}
});

export const getUsers = (currentPage = 1, pageSize = 50) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => {
                    return response.data;
                })
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
// const unfollowUser = (userId) => {
//     return instance.delete(`follow/${userId}`)
//                 .then(response => {
//                     return response.data;
//                 })
// }

// export const followUser = (userId) => {
//     return instance.post(`follow/${userId}`)
//                 .then(response => {
//                     return response.data;
//                 })
// }
 export default followApi;