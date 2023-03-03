import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { getProducer, ListCate, getProByID, updatePro } from "../../server/ProductServer"
const Updateproduct = () => {

    const [allProducer, setProducer] = useState([]);
    const [getCategory, setCategory] = useState([]);
    const [validatorMSG, setValdatorMSG] = useState();
    const [Product, setProduct] = useState({
        category_ID: "", cpu: "", created_at: "", describes: "", gpu: "", price: "", producer_ID: "", product_ID: "", product_Name: "", quantity: "",
        ram: "", rom: "", screen: "", thumnail: "", title: "", updated_at: ""
    });

    const { id } = useParams();
    useEffect(() => {

        const fetch = async () => {
            let Productid = await getProByID(id);
            let Producer = await getProducer();
            let Category = await ListCate();
            setProduct(Productid.data)


            setProducer(Producer.data);
            setCategory(Category.data);
        }

        fetch();

    }, [id])

    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result)
            reader.onerror = error => reject(error);
        });
    }
    const Anh = (event) => {
        const file = event.target.files[0];
        console.log(file)
        const msg = {}
        // if (typeof (file) === 'undefined') {
        //     console.log("Không định dạng được file")
        // } else {

        // }
        try {
            if (file.size / (1024 * 1024) < 5) {
                if (!file.name.match(/\.(jpg|jpeg|png|gif)$/)) {
                    msg.thum = "File ko hợp lệ"
                    setValdatorMSG(msg)
                    console.log("File ko hợp lệ")
                    return
                } else if (!file) {
                    setProduct({ ...Product, thumnail: Product.thumnail })

                    setValdatorMSG(null)
                }
                else {
                    getBase64(file)
                        .then(result => {
                            setProduct({ ...Product, thumnail: result })
                            setValdatorMSG(null)
                        })
                        .catch(err => {
                            console.log(err);
                        });

                }
            }
            else {
                msg.thum = "File ko quá 5mb"
                setValdatorMSG(msg)
                console.log("File ko quá 5mb")
            }
        } catch (error) {

        }

    }

    const check = async (data) => {
        const message = {}

        if (!data.title) {
            message.title = "Title is required"
            // return
        }
        if (!data.product_Name) {
            message.product_Name = "Product name is required"
            // return
        }

        if (!data.price) {
            message.price = "Price is required"
            // return
        } else if (data.price < 0) {
            message.price = "Price must be greater than 0"
        }
        if (!data.cpu) {
            message.cpu = "CPU is required"
            // return
        }
        if (!data.quantity) {
            message.quantity = "Quantity is required"
            // return
        } else if (data.quantity < 0) {
            message.quantity = "Quantity must be greater than 0"
        }
        if (!data.gpu) {
            message.gpu = "GPU is required"
            // return
        }
        if (!data.category_ID) {
            message.category_ID = "Category is required"
            // return
        }
        if (!data.producer_ID) {
            message.producer_ID = "Producer is required"
            // return
        }
        if (!data.describes) {
            message.describes = "Describes is required"
            // return
        }
        if (!data.thumnail) {
            data.thumnail = Product.thumnail
            // return
        }

        if (!data.rom) {
            message.rom = "ROM is required"
            // return
        }
        if (!data.screen) {
            message.screen = "Screen is required"
            // return
        }
        if (!data.ram) {
            message.ram = "RAM is required"
            // return
        }
        setValdatorMSG(message)

        if (Object.keys(message).length > 0) return false
        return true
    }
    const handleAddProduct = async () => {
        let date = new Date();
        let string = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()

        const data = {
            "title": Product.title,
            "product_Name": Product.product_Name,
            "price": Product.price,
            "cpu": Product.cpu,
            "quantity": Product.quantity,
            "gpu": Product.gpu,
            "category_ID": Product.category_ID,
            "producer_ID": Product.producer_ID,
            "describes": Product.describes,
            "thumnail": Product.thumnail,
            "created_at": Product.created_at,
            "updated_at": string,
            "rom": Product.rom,
            "screen": Product.screen,
            "ram": Product.ram,
            "product_ID": Product.product_ID
        }
        let test = check(data);
        console.log(test)
        console.log(data)
        if (!test) {

            return
        } else {
            console.log("heloooo")
            try {
                console.log(data)
                await updatePro(data)
            } catch (error) {

            }
        }






    }

    return (
        Product &&
        <>
            <form style={{ width: "90%", marginLeft: "90px", fontSize: "20xp" }}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Tên Sản Phẩm</label>
                        <input value={Product.product_Name} onChange={(event) => setProduct({ ...Product, product_Name: event.target.value })} required="true" type="text" className="form-control" placeholder="Tên Sản Phẩm" style={{ height: "45px", fontSize: "21px" }} />
                        <p style={{ color: "red" }}>{validatorMSG ? validatorMSG.product_Name : ""}</p>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Price</label>
                        <input value={Product.price} min="1" required="true" onChange={(event) => setProduct({ ...Product, price: event.target.value })} type="number" className="form-control" placeholder="Giá Tiền" style={{ height: "45px", fontSize: "21px" }} />
                        <p style={{ color: "red" }}>{validatorMSG ? validatorMSG.price : ""}</p>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label htmlFor="inputAddress2">Màn Hình</label>
                        <input value={Product.screen} required="true" onChange={(event) => setProduct({ ...Product, screen: event.target.value })} type="text" className="form-control" placeholder="Màn Hình" style={{ height: "45px", fontSize: "21px" }} />
                        <p style={{ color: "red" }}>{validatorMSG ? validatorMSG.screen : ""}</p>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputAddress2">Số Lượng</label>
                        <input value={Product.quantity} min="1" required="true" onChange={(event) => setProduct({ ...Product, quantity: event.target.value })} type="number" className="form-control" placeholder="Số Lượng Sản Phẩm" style={{ height: "45px", fontSize: "21px" }} />
                        <p style={{ color: "red" }}>{validatorMSG ? validatorMSG.quantity : ""}</p>
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputAddress2">Ảnh</label>
                        <input required="true" type="file" className="form-control" onChange={event => Anh(event)} style={{ height: "45px", fontSize: "21px" }} />
                        <p style={{ color: "red" }}>{validatorMSG ? validatorMSG.thum : ""}</p>
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputAddress2">Nhà Sản Xuất</label>
                        <select value={Product.producer_ID} onChange={(event) => setProduct({ ...Product, producer_ID: event.target.value })} id="inputState" className="form-control" style={{ height: "45px", fontSize: "21px" }}>
                            <option selected>Chosse</option>
                            {
                                allProducer.map((item) => {
                                    return (
                                        <option key={item.id} value={item.producerName}>{item.producerName}</option>
                                    )

                                })
                            }

                        </select>

                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputAddress2">Thể Loại</label>
                        <select value={Product.category_ID} onChange={(event) => setProduct({ ...Product, category_ID: event.target.value })} id="inputState" className="form-control" style={{ height: "45px", fontSize: "21px" }}>
                            <option selected>Chosse</option>
                            {
                                getCategory.map((item) => {
                                    return (
                                        <option key={item.categoryId} value={item.categoryName}>{item.categoryName}</option>
                                    )

                                })
                            }
                        </select>

                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label htmlFor="inputCity">RAM</label>
                        <input value={Product.ram} required="true" onChange={(event) => setProduct({ ...Product, ram: event.target.value })} type="text" className="form-control" style={{ height: "45px", fontSize: "21px" }} />
                        <p style={{ color: "red" }}>{validatorMSG ? validatorMSG.ram : ""}</p>
                    </div>

                    <div className="form-group col-md-3">
                        <label htmlFor="inputZip">ROM</label>
                        <input value={Product.rom} required="true" onChange={(event) => setProduct({ ...Product, rom: event.target.value })} type="text" className="form-control" style={{ height: "45px", fontSize: "21px" }} />
                        <p style={{ color: "red" }}>{validatorMSG ? validatorMSG.rom : ""}</p>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputZip">CPU</label>
                        <input value={Product.cpu} required="true" onChange={(event) => setProduct({ ...Product, cpu: event.target.value })} type="text" className="form-control" style={{ height: "45px", fontSize: "21px" }} />
                        <p style={{ color: "red" }}>{validatorMSG ? validatorMSG.cpu : ""}</p>

                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputZip">GPU</label>
                        <input value={Product.gpu} required="true" onChange={(event) => setProduct({ ...Product, gpu: event.target.value })} type="text" className="form-control" style={{ height: "45px", fontSize: "21px" }} />
                        <p style={{ color: "red" }}>{validatorMSG ? validatorMSG.gpu : ""}</p>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputAddress2">Tiêu Đề</label>
                        <textarea value={Product.title} required="true" onChange={(event) => setProduct({ ...Product, title: event.target.value })} style={{ height: "150px" }} className="form-control" rows="3"></textarea>
                        <p style={{ color: "red" }}>{validatorMSG ? validatorMSG.title : ""}</p>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputAddress2">Thông tin chi tiết</label>
                        <textarea value={Product.describes} required="true" onChange={(event) => setProduct({ ...Product, describes: event.target.value })} style={{ height: "150px" }} className="form-control" rows="3"></textarea>
                        <p style={{ color: "red" }}>{validatorMSG ? validatorMSG.describes : ""}</p>
                    </div>
                </div>

            </form>
            <button onClick={() => { handleAddProduct() }} className="btn btn-primary">ADD Product</button>
        </>
    )
}
export default Updateproduct