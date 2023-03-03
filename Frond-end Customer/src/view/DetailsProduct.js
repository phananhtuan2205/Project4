import React from "react";
import "../style/DetailProduct.scss"
import { getIMG, getProByID } from "../server/ProductServer"
import { withRouter } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import { connect } from "react-redux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class DetailsProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Object: [],
            Product: {
                "category_ID": "",
                "cpu": "",
                "describes": "",
                "gpu": "",
                "price": "",
                "producer_ID": "",
                "product_ID": "",
                "product_Name": "",
                "quantity": "",
                "ram": "",
                "rom": "",
                "screen": "",
                "thumnail": "",
                "title": ""
            },
            quan: 1,
            item: "",
            number: 0

        }
    }
    getAnh = async () => {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id
            console.log(id);
            let respone = await getIMG(id);
            console.log(respone.data)
            let productdata = await getProByID(id);
            console.log(productdata.data)
            this.setState({
                ...this.state,
                item: productdata.data.thumnail,
                Object: respone.data,
                Product: productdata.data
            })
        }

    }
    myRef = React.createRef();
    componentDidMount() {

        this.getAnh();

    }
    handTab = index => {
        const img = this.myRef.current.children;
        this.setState({
            ...this.state,
            number: index
        }, () => {
            for (let i = 0; i < img.length; i++) {
                img[i].className = img[i].className.replace("active", "");
            }
            img[this.state.number].className = "active"
            this.setState({
                ...this.state,
                item: this.state.Object[this.state.number].img
            })
        })



    }
    addmore = () => {
        this.setState({
            quan: this.state.quan + 1
        })
    }

    subtrac = () => {
        this.setState({
            quan: this.state.quan - 1
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
    AddToRedux = () => {

        let ListPro = {
            "category_ID": this.state.Product.category_ID,
            "cpu": this.state.Product.cpu,
            "describes": this.state.Product.describes,
            "gpu": this.state.Product.gpu,
            "price": this.state.Product.price,
            "producer_ID": this.state.Product.producer_ID,
            "product_ID": this.state.Product.id,
            "product_Name": this.state.Product.product_Name,
            "quantity": this.state.quan,
            "ram": this.state.Product.ram,
            "rom": this.state.Product.rom,
            "screen": this.state.Product.screen,
            "thumnail": this.state.Product.thumnail,
            "title": this.state.Product.title,
            "totalPrice": this.state.Product.price * this.state.quan
        }
        this.notify(ListPro)
        this.props.AddProToRedux(ListPro);
    }
    render() {


        return (
            <React.Fragment>
                <Header />
                <div className="container-fruit1">
                    <div className="Detail-Pro">
                        <div className="row">
                            <div className="col-md-5" >
                                <div className="picture" >
                                    <div className="anhchinh" >
                                        <img src={this.state.item} alt="a" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7" key={this.state.Product.id}>

                                <h1 ><b>{this.state.Product.product_Name}</b></h1>
                                <div className="row-child">
                                    <div className="col-md-7" >

                                        <div className="Title">
                                            <p>{this.state.Product.describes}   </p>
                                            <p>{this.state.Product.title}</p>

                                        </div>
                                        <h2 style={{ marginTop: "20px" }}>{new Intl.NumberFormat('vie-DE', { style: 'currency', currency: 'VND' }).format(this.state.Product.price)}</h2>
                                    </div>
                                    <div className="col-md-5" >
                                        <div className="infor">
                                            <h2 >Thông Số Kĩ Thuật</h2>

                                            <ul className="container mt-3">
                                                <li className="list-group-item">
                                                    <p>CPU</p>
                                                    <div >{this.state.Product.cpu}</div>
                                                </li>
                                                <li className="list-group-item">
                                                    <p>GPU</p>
                                                    <div >{this.state.Product.gpu}</div>
                                                </li>
                                                <li className="list-group-item">
                                                    <p>RAM</p>
                                                    <div >{this.state.Product.ram}</div>
                                                </li>
                                                <li className="list-group-item">
                                                    <p>ROM</p>
                                                    <div >{this.state.Product.rom}</div>
                                                </li>
                                                <li className="list-group-item">
                                                    <p>Màn Hình</p>
                                                    <div >{this.state.Product.screen}</div>
                                                </li>

                                            </ul>

                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div className="foot">
                                <div className="imgfooter" ref={this.myRef}>
                                    {
                                        this.state.Object.map((anh, index) => {
                                            return (
                                                <>
                                                    <img key={anh.id} src={anh.img} alt="a"
                                                        onClick={() => { this.handTab(index) }}
                                                    />
                                                </>
                                            )
                                        })
                                    }
                                </div>
                                <div className="add-to-cart" >
                                    <div className="quantity">
                                        {
                                            this.state.quan > 1 && <>
                                                <button onClick={() => { this.subtrac() }}><i className="bi bi-dash"></i></button>
                                            </>

                                        }

                                        <input type="number" value={this.state.quan} disabled ></input>
                                        <button onClick={() => { this.addmore() }}><i className="bi bi-plus"></i></button>
                                    </div>
                                    <div className="ADD">
                                        <i className="bi bi-cart4"></i>
                                        <button onClick={() => { this.AddToRedux() }}>Thêm Giỏ Hàng</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </React.Fragment >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.Product
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        AddProToRedux: (ListPro) => dispatch({ type: 'AddPro', payload: ListPro })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DetailsProduct))