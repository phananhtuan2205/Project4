import axios from "axios";

const login = (data) => {
    return axios.post("http://localhost:8081/api/User/login", data)
}

export { login } 