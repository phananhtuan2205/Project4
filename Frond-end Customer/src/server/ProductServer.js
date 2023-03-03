import axios from "axios";

const getall = (page) => {
    return axios.get(`http://localhost:8081/api/Product?page=${page}`);
}
const getPro_By_Category_ID = (Category_ID) => {
    console.log(Category_ID);
    return axios.get(`http://localhost:8081/api/Product/byCategory/${Category_ID}`);
}
const ListCate = () => {
    return axios.get("http://localhost:8081/api/Category/list");
}
const total_Page = () => {
    return axios.get(`http://localhost:8081/api/Product/totalpage?name=`);
}
const getIMG = (ProductID) => {
    return axios.get(`http://localhost:8081/api/ImgList?ProductID=${ProductID}`);
}
const getProByID = (id) => {
    return axios.get(`http://localhost:8081/api/Product/${id}`);
}



export { getall, ListCate, getPro_By_Category_ID, total_Page, getIMG, getProByID };