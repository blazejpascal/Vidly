
import axios from 'axios'
import {toast} from 'react-toastify'
import logService from "./logService";

axios.interceptors.response.use(null, error => {

    const expectError = error.response && error.response.status >= 400 && error.response.status < 500

    if (!expectError) {
        logService.log(error)
        toast.error("An unexpoected erroer occured")
    }

    return Promise.reject(error)
})

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}