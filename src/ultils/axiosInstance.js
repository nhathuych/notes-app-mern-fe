import axios from 'axios'
import { API_BASE_URL, LOCAL_STORAGE_KEYS } from './constants'

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 6000,
  headers: { "Content-Type": "application/json" }
})

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem(LOCAL_STORAGE_KEYS.access_token)
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axiosInstance
