import React from "react";
import Slider from "react-slick";
import "../style/style.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Object: [
                {
                    "name": "ABC",
                    "title": "LaptopAZ",
                    "thumbnail": [
                        "https://cdn.tgdd.vn/Files/2017/01/19/939425/cach-cai-hinh-nen-may-tinh-khong-bi-mo_1280x720-800-resize.jpg",
                        "https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/63432/Originals/huong-dan-cach-cai-dat-hinh-nen-may-tinh-win-10-don-gian-8.jpg",
                        "https://laptop88.vn/media/news/2910_hinhanhmaytinhxachtay4.jpg",
                        "https://laptop88.vn/media/news/2910_hinhanhmaytinhxachtay4.jpg",


                    ]
                }
            ],
            number: 0

        }
    }


    handTab = index => {

        this.setState({
            number: index
        })


    }

    render() {
        const settings = {

            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };
        return (
            <>
                {
                    this.state.Object.map((item) => {
                        return (
                            <>
                                <div className="picture" key={item.name}>
                                    <div className="anhchinh" >
                                        <img src={item.thumbnail[this.state.number]} alt="a" />
                                    </div>
                                    <div className="chon" >

                                        <Slider {...settings}>
                                            {
                                                item.thumbnail.map((anh, index) => {
                                                    return (
                                                        <>

                                                            <img src={anh} alt={index} key={index}
                                                                onClick={() => { this.handTab(index) }}
                                                            />
                                                        </>
                                                    )
                                                })
                                            }
                                        </Slider>



                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </>
        );
    }
}

export default Test