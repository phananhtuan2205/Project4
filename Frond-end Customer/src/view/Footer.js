import React from "react";
import "bootstrap";
class Footer extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="footer">
                    <div className="wrap">
                        <div className="section-group">
                            <div className="col-md-3">
                                <h3>Thông tin chung</h3>
                                <p>Mang đến sự lựa chọn tốt nhất</p>
                                <p>Mang đến sự lựa chọn tốt nhất</p>
                            </div>
                            <div className="col-md-3">
                                <h3>Latest-News</h3>
                                <p>Bphone 3 is coming...</p>
                                <p>Bphone 3 is coming...</p>
                            </div>
                            <div className="col-md-3">
                                <h3>Địa điểm cửa hàng</h3>
                                <p> 1000 Giải Phóng-Hai Bà Trưng-Hà Nội</p>
                                <p> 1000 Giải Phóng-Hai Bà Trưng-Hà Nội</p>
                            </div>
                            <div className="col-md-3">
                                <h3>Follow Us:</h3>
                                <ul>
                                    <li><a href="a"><i className="bi bi-twitter"> Twitter</i></a></li>
                                    <li><a href="a"><i className="bi bi-facebook"> Facebook</i></a></li>

                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="clear"> </div>
                    <div className="wrap">
                        <div className="copy-right">
                            <p>&copy; 2018 Laptop Store. All Rights Reserved | Design by Group 14- HUST </p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Footer;