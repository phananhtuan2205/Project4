import axios from "axios";

const dk = (data) => {
    return axios.post("http://localhost:8081/api/Customer/save", data);
}
const findbyEmail = (email) => {
    return axios.get(`http://localhost:8081/api/Customer/a?email=${email}`)
}

const login = (data) => {
    return axios.post("http://localhost:8081/api/Customer/login", data)
}

export { dk, findbyEmail, login }