import React from "react";
import { withRouter } from "react-router-dom";
import "../style/style.scss";
import Header from './Header';
import Footer from './Footer';
import { connect } from "react-redux";
import { getPro_By_Category_ID, getall, total_Page } from "../server/ProductServer"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class AllProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Object: [], test: [],
            page: 1,
            total_Page: ""
        }
    }

    getCategory = async () => {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id

            if (typeof (id) === 'undefined') {
                let respone = await getall(this.state.page);
                console.log(respone)
                this.setState({
                    ...this.state,
                    Object: respone.data,
                }, () => {
                    console.log(this.state.Object)
                })

            }
            else {
                let respone = await getPro_By_Category_ID(id);
                this.setState({
                    Object: respone.data
                })


            }
        }
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id

            if (typeof (id) === 'undefined') {
                let total = await total_Page();

                this.getCategory();
                this.setState({
                    ...this.state,
                    total_Page: Math.ceil(total.data / 6)
                }, () => {
                    console.log("total Page", this.state.total_Page)
                }
                )
                for (let i = 1; i <= this.state.total_Page; i++) {

                    this.state.test.push(i);
                }
                console.log(this.state.test)
            }
            else {
                this.getCategory();
                console.log(this.state.Object)
                let length_page = Math.ceil(this.state.Object.length / 6)
                for (let i = 1; i <= length_page; i++) {

                    this.state.test.push(i);
                }
                console.log(this.state.test)
            }
        }

    }
    Previous = () => {
        this.setState({
            page: this.state.page - 1
        }, () => {
            console.log("page hiện tại ", this.state.page)
            this.getCategory()
        })
    }
    PageChange = (number) => {
        console.log("Số: ", number)
        this.setState({
            page: number,
        }, () => {
            console.log("page hiện tại ", this.state.page)
            this.getCategory()
        })
    }
    Next = () => {
        this.setState({
            page: this.state.page + 1
        }, () => {
            console.log("page hiện tại ", this.state.page)
            this.getCategory()
        })
    }
    notify = (Product) => {
        toast.success(`Đã Thêm ${Product.product_Name} Vào Giỏ Hàng`, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    AddToRedux = (pro) => {
        let ListPro = {
            "category_ID": pro.category_ID,
            "cpu": pro.cpu,
            "describes": pro.describes,
            "gpu": pro.gpu,
            "price": pro.price,
            "producer_ID": pro.producer_ID,
            "product_ID": pro.product_ID,
            "product_Name": pro.product_Name,
            "quantity": 1,
            "ram": pro.ram,
            "rom": pro.rom,
            "screen": pro.screen,
            "thumnail": pro.thumnail,
            "title": pro.title,
            "totalPrice": pro.price
        }
        this.notify(ListPro)
        console.log(this.props.AddProToRedux)
        this.props.AddProToRedux(ListPro);
    }
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="container-pro">
                    <div className="row">
                        <div className="col-md-8">
                            {
                                this.state.Object.map((item) => {
                                    return (
                                        <div className="col-md-3" key={item.product_ID}>
                                            <a href={`/productID/${item.product_ID}`} style={{ height: "450px" }}>
                                                <div className="pro">
                                                    <img src={item.thumnail} alt={item.product_Name}></img>
                                                </div>
                                                <div className="pro_name">
                                                    <span style={{ fontSize: "20px" }}>{item.product_Name}</span>
                                                </div>
                                                <div className="pro">
                                                    <span style={{ fontSize: "20px" }}>{new Intl.NumberFormat('vie-DE', { style: 'currency', currency: 'VND' }).format(item.price)}</span>
                                                </div>

                                            </a>
                                            <div className="ADD">
                                                <i className="bi bi-cart4"></i>
                                                <button onClick={() => { this.AddToRedux(item) }}>Thêm Giỏ Hàng</button>
                                            </div>
                                        </div>

                                    )
                                })
                            }

                            <div className="col-md-6">

                                <ul className="pagination">
                                    {
                                        this.state.page > 1 && <>
                                            <button onClick={() => {
                                                this.Previous()
                                            }} className="page-item">Previous</button>
                                        </>
                                    }

                                    {
                                        this.state.test.map((number) => {
                                            return (
                                                <button key={number} value={number} className={this.state.page === number ? "sotrang active" : "sotrang"} onClick={() => { this.PageChange(number) }}>{number}</button>
                                            )
                                        })
                                    }
                                    {
                                        this.state.page < this.state.total_Page && <>
                                            <button onClick={() => {
                                                this.Next()
                                            }} className="page-item">Next</button>
                                        </>
                                    }

                                </ul>

                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="search_item">
                                <input></input>
                                <button>
                                    <i className="bi bi-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </React.Fragment >
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        AddProToRedux: (ListPro) => dispatch({ type: 'AddPro', payload: ListPro })
    }
}
const mapStateToProps = (state) => {
    return {
        dataRedux: state.Product
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AllProducts));