import React from "react";
import "../style/Header.scss";
import "bootstrap";
import { ListCate } from "../server/ProductServer";
import logo from "../img/logo_header_logo_logo.png";
class Header extends React.Component {

    constructor(prop) {
        super(prop);
        this.state = {
            CateList: []
        }
    }

    async componentDidMount() {
        console.log(localStorage.getItem("customer"))
        let respone = await ListCate();
        this.setState({
            CateList: respone.data
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="container-header">
                    <div className="row">

                        <div className="col-sm-3">
                            <img src={logo} alt="logo"></img>

                        </div>
                        <div className="col-sm-6">
                            <nav className="navbar navbar-expand-sm  navbar-light">
                                <div className="container-fluid">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-link" href="/home"><b>Trang chủ</b></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/Shipping"><b>Vận Chuyển</b></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/baohanh"><b>Bảo Hành</b></a>
                                        </li>
                                        <div class="dropdown nav-item ">
                                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Danh Sách
                                            </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                {
                                                    this.state.CateList.map((item => {
                                                        return (
                                                            <a class="dropdown-item" href={`/allproduct/category/${item.categoryId}`}>{item.categoryName}</a>

                                                        )
                                                    }))
                                                }

                                            </div>
                                        </div>


                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="col-sm-2">
                            <div className="cart">
                                <a href="/cart">
                                    <span><i className="bi bi-cart"></i></span>
                                    <span>Giỏ hàng</span>
                                </a>
                            </div>
                            {
                                localStorage.getItem("customer") ? (<div className="Customer">
                                    <a href="/Login"><span>Đăng Xuất</span></a>
                                </div>) : (<div className="Customer">
                                    <a href="/Login"><span>Đăng Nhập</span></a>
                                </div>)
                            }

                        </div>

                    </div>
                </div>


            </React.Fragment >

        )
    }
}

export default Header;