import React from "react";
import shipping1 from "../img/shipping1.jpg";
import shipping2 from "../img/shipping2.jpg";
import Header from './Header';
import Footer from './Footer';
import "../style/style.scss";
import "bootstrap";
class Shipping extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="container-ship">
                    <div className="row">
                        <div className="col-md-10 pull-center">
                            <img className="item1" src={shipping1} alt="" />
                            <img className="item2" src={shipping2} alt="" />

                        </div>
                        <div className="col-md-10 pull-center">
                            <div className="text-1">
                                <h3><p><b>1. LƯU Ý:</b></p></h3>
                                <h4>- Sau khi bạn đặt hàng, trong vòng 12 giờ làm việc chúng tôi sẽ liên lạc lại để xác nhận và kiểm tra thông tin.</h4>
                                <h4>- Những rủi ro phát sinh trong quá trình vận chuyển (va đập, ẩm ướt, tai nạn..) có thể ảnh hưởng đến hàng hóa, vì thế xin Quý Khách vui lòng kiểm tra hàng hóa thật kỹ trước khi ký nhận. Máy tính Hà Nội sẽ không chịu trách nhiệm với những sai lệch hình thức của hàng hoá sau khi Quý khách đã ký nhận hàng.</h4>
                            </div>


                            <div className="text-2">
                                <h3><p><b>2. BẢNG GIÁ DỊCH VỤ VẨN CHUYỂN HÀNG HÓA</b></p></h3>
                                <table id="customers">
                                    <thead>
                                        <tr>
                                            <th>Theo giá trị đơn hàng</th>
                                            <th>Số Km được Miễn Phí</th>
                                            <th>Thời gian đáp ứng</th>
                                            <th>Thu phí</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>200.000đ - 500.000đ</td>
                                            <td></td>
                                            <td>Giao hàng trong vòng 3h</td>
                                            <td>Giao hàng bán kính 15km và thu phí 20.000đ /1 lần giao. Km16 tính 6000đ/km và tối đa 45 km</td>
                                        </tr>
                                        <tr>
                                            <td>500.000đ - 1.000.000đ</td>
                                            <td>20 Km</td>
                                            <td>Giao hàng trong vòng 3h</td>
                                            <td>Từ km thứ 21 thu phí 6.000/km, giao hàng tối đa 45 km</td>
                                        </tr>
                                        <tr>
                                            <td>1.000.000đ - 3.000.000đ</td>
                                            <td>25km</td>
                                            <td>Giao hàng trong vòng 3h</td>
                                            <td>Từ km thứ 26 thu phí 6.000/km, giao hàng tối đa 45 km</td>
                                        </tr>
                                        <tr>
                                            <td>Trên 3.000.000đ</td>
                                            <td>35km</td>
                                            <td>Giao hàng trong vòng 4h Giao hàng trong 24h (36km-45km)</td>
                                            <td>Từ km thứ 36 thu phí 6.000/km, giao hàng tối đa 45 km</td>
                                        </tr>

                                    </tbody>
                                </table>

                                <p>
                                    - Đối với khách hàng vượt quá khoảng cách quy định từ 46km trở lên, áp dụng phương thức gửi xe khách (khách hàng chọn xe để gửi) hoặc chuyển phát nhanh, khách hàng thanh toán phí vận chuyển cho bên giao hàng.</p>


                                <p>
                                    - Đối với đơn hàng từ 500.000 đ đến 3000.000 đ mà cồng kềnh cần phải giao bằng ô tô thì miễn phí km như khoảng cách giao hàng xe máy và tính phí vượt quá km đối với ô tô là 10.000/km
                                </p>
                            </div>
                        </div>


                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Shipping;