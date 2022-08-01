import axios from "axios"
const request  = axios.create({
    baseUrl: "/api",
    timeout:5000
})
export default request