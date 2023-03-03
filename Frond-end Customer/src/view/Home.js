import React from "react";
import "../style/style.scss";
import "bootstrap";
import { getall, total, ListCate } from "../server/ProductServer";
import logo1 from "../img/laptop1.jpg";
import logo2 from "../img/laptop2.png";
import Header from './Header';
import Footer from './Footer';
import logo3 from "../img/laptop3.png";
class Home extends React.Component {

    constructor(prop) {
        super(prop);
        this.state = {
            Object: [],
            first_page: "",
            page_start: 1,
            total_Page: "",
            test: [],
            CateList: [],
            Search_Item: ""
        }
    }

    async componentDidMount() {
        let reponse = await getall(1);

        let list_cate = await ListCate();


        this.setState({
            Object: reponse.data,
            CateList: list_cate.data,
        }
        )
    }
    Search = event => {
        this.setState({
            Search_Item: event.target.value
        })
        console.log(this.state.Search_Item)
    }


    render() {


        return (
            <React.Fragment>
                <Header />
                <div id="myCarousel" className="carousel slide" data-ride="carousel">

                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>


                    <div className="carousel-inner ">
                        <div className="item active">
                            <img src={logo1} alt="Los Angeles" />
                        </div>

                        <div className="item">
                            <img src={logo2} alt="Chicago" />
                        </div>

                        <div className="item">
                            <img src={logo3} alt="New York" />
                        </div>
                    </div>


                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

                <div className="container-home">
                    <div className="row">
                        <div className="col-md-6">
                            {
                                this.state.Object.map((item) => {
                                    return (
                                        <div className="col-md-3" key={item.product_ID}>
                                            <a href={`/productID/${item.product_ID}`}>
                                                <div className="pro">
                                                    <img src={item.thumnail} alt={item.product_Name}></img>
                                                </div>
                                                <div className="pro">
                                                    <span style={{ fontSize: "20px" }}>{item.product_Name}</span>
                                                </div>
                                                <div className="pro">
                                                    <span style={{ fontSize: "20px" }}> {new Intl.NumberFormat('vie-DE', { style: 'currency', currency: 'VND' }).format(item.price)}</span>
                                                </div>

                                            </a>
                                        </div>

                                    )
                                })
                            }



                        </div>
                        <div className="col-md-4">
                            <div className="search_item">
                                <input onKeyDown={(event) => {
                                    this.onKeyDown(event)
                                }} value={this.state.Search_Item} onChange={(event) => { this.Search(event) }}></input>
                                <button>
                                    <i className="bi bi-search"></i>
                                </button>

                            </div>
                            <div className="DanhMuc">
                                <h2><b>DANH MỤC SẢN PHẨM</b></h2>
                                <ul className="list-group">
                                    <li className="list-group-item"><a className="dropdown-item" href={`/allproduct/category/`}>Tất Cả</a></li>
                                    {
                                        this.state.CateList.map((item => {
                                            return (
                                                <li key={item.category_ID} className="list-group-item"><a className="dropdown-item" href={`/allproduct/category/${item.categoryId}`}>{item.categoryName}</a></li>
                                            )
                                        }))
                                    }

                                </ul>
                            </div>
                        </div>
                    </div>



                </div>
                <Footer />
            </React.Fragment >

        )
    }
}

export default Home;