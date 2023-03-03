import React from "react";
import "../style/Modal.scss";
class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            isOpen: false
        }
    }
    close = () => {
        this.props.close();
    }
    Delete = () => {
        this.props.delete(this.props.item)
        console.log(this.props)
        this.props.close();
    }
    render() {

        return (
            <>
                <div className='overlay' onClick={() => { this.close() }}>
                    <div
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                        className='modalContainer'
                    >
                        <div className='modalRight'>
                            <p className='closeBtn' onClick={() => { this.close() }}>
                                X
                            </p>
                            <div className='content'>
                                <p>Bạn Có Muốn Xoá {this.props.item.item.product_Name} Khỏi Giỏ Hàng Không</p>

                            </div>
                            <div className='btnContainer'>
                                <button className='btnPrimary' onClick={() => { this.Delete() }}>
                                    <span className='bold'>YES</span>
                                </button>
                                <button className='btnOutline' onClick={() => { this.close() }}>
                                    <span className='bold'>NO</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Modal;