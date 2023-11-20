import axios, { AxiosInstance } from 'axios'

const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'http://10.0.2.2:5000',
})


// axiosInstance.interceptors.request.use(config => {
//     // try {
//     //     config.headers.authorization = `Bearer ${localStorage.getItem('accessToken')}`
//     // } catch (error) {
//     //     console.log(error);
//     // }
//     return config
// }, error => {
//     Promise.reject(error)
// })

export default axiosInstance