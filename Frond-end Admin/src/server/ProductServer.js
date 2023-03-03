import axios from "axios";

const getall = (page) => {
    return axios.get(`http://localhost:8081/api/Product?page=${page}&&size=${5}`);
}
const getPro_By_Category_ID = (Category_ID) => {
    console.log(Category_ID);
    return axios.get(`http://localhost:8081/api/Product/byCategory/${Category_ID}`);
}
const ListCate = () => {
    return axios.get("http://localhost:8081/api/Category/list");
}
const total_pro = () => {
    return axios.get(`http://localhost:8081/api/Product/totalpage?name=`);
}
const getIMG = (ProductID) => {
    return axios.get(`http://localhost:8081/api/ImgList?ProductID=${ProductID}`);
}
const getProByID = (id) => {
    return axios.get(`http://localhost:8081/api/Product/${id}`);
}
const getProducer = (id) => {
    return axios.get(`http://localhost:8081/api/Producer`);
}
const addproduct = (data) => {
    console.log("data là ", data)
    return axios.post('http://localhost:8081/api/Product/add', data)
}
const getbyProductName = (name) => {
    return axios.get(`http://localhost:8081/api/Product/namePro?name=${name}`)
}

const deletePro = (id) => {
    console.log("ID sản phẩm xoá", id)
    return axios.delete(`http://localhost:8081/api/Product/deletePro?id=${id}`)
}
const updatePro = (data) => {
    console.log("ID sản phẩm Update", data)
    return axios.put('http://localhost:8081/api/Product/Edit', data)
}



export { getall, ListCate, getPro_By_Category_ID, total_pro, getIMG, getProByID, getProducer, addproduct, getbyProductName, deletePro, updatePro };