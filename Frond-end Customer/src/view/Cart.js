import React, { createRef } from "react";
import "../style/style.scss";
import "bootstrap";
import Header from './Header';
import Footer from './Footer';
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from "./Modal";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ListCart: [],
            totalPrice: "",
            isOpen: false,
            ListPro: {
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
                "title": "",
                "totalPrice": ""
            }
        }
    }
    getListFromRedux = () => {
        this.setState({
            ListCart: this.props.dataRedux,
            totalPrice: this.props.dataRedux.price * this.props.dataRedux.quantity
        })
    }
    componentDidMount() {
        this.getListFromRedux();
    }
    DeleteProCart = (cartIem) => {
        toast.error(`Đã Xoá ${cartIem.item.product_Name} Ra Khỏi Giỏ Hàng`, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            Transition: "slide"
        });
        let a = this.state.ListCart.filter(item => item.product_ID !== cartIem.item.product_ID)
        this.setState({
            ListCart: a
        })
        this.props.DeleteProRedux(cartIem.item)
    }
    AddQuantity = (Product) => {
        const proInCart = this.state.ListCart
        const find = proInCart.findIndex((item) =>
            item.product_ID === Product.product_ID
        );
        proInCart[find].quantity = proInCart[find].quantity + 1
        proInCart[find].totalPrice = proInCart[find].quantity * proInCart[find].price
        this.setState({
            ListCart: proInCart
        })
        this.props.AddQuantity(proInCart[find]);
    }

    SubtractQuantity = (Product) => {
        const proInCart = this.state.ListCart
        const find = proInCart.findIndex((item) =>
            item.product_ID === Product.product_ID
        );
        proInCart[find].quantity = proInCart[find].quantity - 1
        proInCart[find].totalPrice = proInCart[find].quantity * proInCart[find].price
        this.setState({
            ListCart: proInCart
        })
        this.props.SubQuantity(proInCart[find]);
    }
    handleClickOutSide = (e) => {
        if (this.modalRef.current === e.target) {
            console.log("Click outSide");
            this.setState({
                isOpen: false
            })
        }
        else {
            console.log("Click inside");

        }
    }

    handleShow = (item) => {
        this.setState({
            ...this.state,
            isOpen: true,
            ListPro: item
        })
    };
    HideModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };
    modalRef = createRef();
    render() {

        return (

            <React.Fragment>
                <Header />

                <div className="row">
                    <div className="col-md-10 pull-center">
                        <h3><p><b>QUẢN LÝ GIỎ HÀNG</b></p></h3>
                        <table id="customers">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Ảnh</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Đơn giá</th>
                                    <th>Số lượng</th>
                                    <th>Tổng</th>
                                    <th>Xoá</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    this.state.ListCart && this.state.ListCart.length > 0 &&
                                    this.state.ListCart.map((item, index) => {
                                        return (
                                            <> <tr key={item.product_ID} ref={this.modalRef}>
                                                <td>{index + 1}</td>
                                                <td><img src={item.thumnail} alt="1" width="150px" /></td>
                                                <td>{item.product_Name}</td>
                                                <td>{new Intl.NumberFormat('vie-DE', { style: 'currency', currency: 'VND' }).format(item.price)}</td>
                                                <td className="number">
                                                    <button disabled={item.quantity <= 1} onClick={() => { this.SubtractQuantity(item) }}><i className="bi bi-dash"></i></button>
                                                    <input type="number" value={item.quantity} disabled ></input>
                                                    <button onClick={() => { this.AddQuantity(item) }}><i className="bi bi-plus"></i></button>
                                                </td>
                                                <td>{new Intl.NumberFormat('vie-DE', { style: 'currency', currency: 'VND' }).format(item.totalPrice)}</td>
                                                <td><button onClick={() => { this.handleShow({ item }) }}><i className="bi bi-trash3"></i></button></td>
                                            </tr>

                                            </>
                                        )
                                    })
                                }


                            </tbody>
                        </table>
                    </div>
                </div>

                <Footer />
                {this.state.isOpen === true && <Modal
                    isOpen={this.state.isOpen}
                    close={this.HideModal}
                    item={this.state.ListPro}
                    delete={this.DeleteProCart}
                />}
            </React.Fragment>

        );
    }
}
const mapStateToProps = (state) => {
    return {
        dataRedux: state.Product
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        DeleteProRedux: (ListPro) => dispatch({ type: 'DeletePro', payload: ListPro }),
        AddProToRedux: (ListPro) => dispatch({ type: 'AddPro', payload: ListPro }),
        AddQuantity: (ListPro) => dispatch({ type: 'AddQuantity', payload: ListPro }),
        SubQuantity: (ListPro) => dispatch({ type: 'SubQuantity', payload: ListPro })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);