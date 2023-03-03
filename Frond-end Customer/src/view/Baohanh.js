import React from "react";
import "../style/style.scss"
import anh from "../img/guarantee.jpg"
import Header from './Header';
import Footer from './Footer';
class Baohanh extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="container-fruit">
                    <div className="row">
                        <div className="col-lg-10 pull-center">
                            <img src={anh} alt="1" />
                            <p>
                                Nhằm đáp ứng tốt hơn nhu cầu của khách hàng và nâng cao chất lượng dịch vụ, Công ty Máy Tính Hà Nội cung cấp cho khách hàng chương trình: “Bảo hành vàng đồng hành cùng doanh nghiệp”. Mục đích của chương trình là cung cấp thêm cho khách hàng doanh nghiệp về dịch vụ sau bán hàng nhằm đem lại nhiều lợi ích và sự yên tâm cho quý khách hàng khi sử dụng sản phẩm của Công ty Máy Tính Hà Nội.

                            </p>
                            <p>

                                <b>1. THỜI GIAN ÁP DỤNG:</b> Từ ngày 25/7/2018
                            </p>


                            <p>

                                <b>2. SẢN PHẨM ÁP DỤNG:</b> Máy tính nguyên chiếc (laptop, máy tính lắp ráp, máy đồng bộ)</p>


                            <p>

                                <b>3. ĐỐI TƯỢNG ÁP DỤNG:</b>  Khách hàng dùng cuối là các doanh nghiệp, tổ chức</p>

                            <p>
                                <b>4. NỘI DUNG:</b>
                            </p>


                            <p>
                                Khách hàng là các doanh nghiệp, tổ chức (không áp dụng cho khách hàng cá nhân) khi mua máy tính nguyên chiếc (bao gồm: laptop, máy tính lắp ráp, máy đồng bộ) tại Công Ty Máy Tính Hà Nội được tặng 1 THẺ BẢO HÀNH VÀNG trị giá 500.000 đ (bảo hành tại nơi sử dụng) cho mỗi sản phẩm.
                            </p>

                            <p>
                                Thẻ bảo hành Vàng (TBHV) là loại thẻ dịch vụ sửa chữa máy tính, linh kiện và các sản phẩm IT do Công ty Máy Tính Hà Nội phát hành.
                            </p>

                            <p>
                                Thẻ không quy đổi thành tiền và chỉ được cấp một lần cho mỗi sản phẩm. Công ty không cấp lại trong trường hợp làm mất, hỏng hoặc hết hạn thẻ.
                            </p>

                            <p>
                                Mỗi Thẻ BHV có thời hạn sử dụng 12 tháng kể từ ngày cấp. Trong thời hạn đó, khách hàng được sử dụng tối đa 10 lần dịch vụ/Thẻ với tất cả các sản phẩm của khách hàng.
                            </p>

                            <p>
                                Khách hàng có Thẻ BHV có quyền lựa chọn địa điểm Bảo hành: Tại Phòng Bảo hành Công ty, hoặc lựa chọn hình thức bảo hành tại nơi sử dụng trong vòng bán kính 20 Km tính từ địa điểm bán hàng của Công ty Máy Tính Hà Nội.
                            </p>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment >
        )


    }
}

export default Baohanh;