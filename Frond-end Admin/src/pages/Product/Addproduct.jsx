import React, { useEffect, useState } from 'react'
import { getProducer, ListCate, addproduct, getbyProductName } from "../../server/ProductServer"


const Addproduct = () => {
    const [file, setfile] = useState();
    const [Product_Name, setproductName] = useState();
    const [Title, setTitle] = useState();
    const [Gpu, setgpu] = useState();
    const [Describes, setdescribes] = useState();
    const [Producer_ID, setproducer_ID] = useState();
    const [Quantity, setquantity] = useState();
    const [Category_ID, setcategory_ID] = useState();
    const [Price, setprice] = useState();
    const [Cpu, setcpu] = useState();
    const [Ram, setram] = useState();
    const [Rom, setrom] = useState();
    const [Screen, setscreen] = useState();
    const [allProducer, setProducer] = useState([]);
    const [getCategory, setCategory] = useState([]);
    const [validatorMSG, setValdatorMSG] = useState();


    useEffect(() => {

        const fetch = async () => {
            let Producer = await getProducer();
            let Category = await ListCate();
            console.log(Category.data)
            setProducer(Producer.data);
            setCategory(Category.data);
        }
        fetch();

    }, [])
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
                } else {
                    getBase64(file)
                        .then(result => {
                            setfile(result)
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
        else {
            let a = await getbyProductName(data.product_Name)
            if (a) {
                message.product_Name = "Product name is tokken"
            }
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
            message.thum = "Not find file"
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
            "title": Title,
            "product_Name": Product_Name,
            "price": Price,
            "cpu": Cpu,
            "quantity": Quantity,
            "gpu": Gpu,
            "category_ID": Category_ID,
            "producer_ID": Producer_ID,
            "describes": Describes,
            "thumnail": file,
            "created_at": string,
            "updated_at": string,
            "rom": Rom,
            "screen": Screen,
            "ram": Ram
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
                await addproduct(data)
            } catch (error) {

            }
        }






    }

    return (

        <>
            <form style={{ width: "90%", marginLeft: "90px", fontSize: "20xp" }}>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Tên Sản Phẩm</label>
                        <input required="true" onChange={(event) => setproductName(event.target.value)} type="text" class="form-control" placeholder="Tên Sản Phẩm" style={{ height: "45px", fontSize: "21px" }} />
                        <p style={{ color: "red" }}>{validatorMSG ? validatorMSG.product_Name : ""}</p>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputPassword4">Price</label>
                        <input min="1" required="true" onChange={(event) => setprice(event.target.value)} type="number" class="form-control" placeholder="Giá Tiền" style={{ height: "45px", fontSize: "21px" }} />
                        <p style={{ color: "red" }}>{validatorMSG ? validatorMSG.price : ""}</p>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-3">
                        <label for="inputAddress2">Màn Hình</label>
                        <input required="true" onChange={(event) => setscreen(event.target.value)} type="text" class="form-control" placeholder="Màn Hình" style={{ height: "45px", fontSize: "21px" }} />
                        <p style={{ color: "red" }}>{validatorMSG ? validatorMSG.screen : ""}</p>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="inputAddress2">Số Lượng</label>
                        <input min="1" required="true" onChange={(event) => setquantity(event.target.value)} type="number" class="form-control" placeholder="Số Lượng Sản Phẩm" style={{ height: "45px", fontSize: "21px" }} />
                        <p style={{ color: "red" }}>{validatorMSG ? validatorMSG.quantity : ""}</p>
                    </div>
                    <div class="form-group col-md-2">
                        <label for="inputAddress2">Ảnh</label>
                        <input required="true" type="file" class="form-control" onChange={event => Anh(event)} style={{ height: "45px", fontSize: "21px" }} />
                        <p style={{ color: "red" }}>{validatorMSG ? validatorMSG.thum : ""}</p>
                    </div>
                    <div class="form-group col-md-2">
                        <label for="inputAddress2">Nhà Sản Xuất</label>
                        <select onChange={(event) => setproducer_ID(event.target.value)} id="inputState" class="form-control" style={{ height: "45px", fontSize: "21px" }}>
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
                    <div class="form-group col-md-2">
                        <label for="inputAddress2">Thể Loại</label>
                        <select onChange={(event) => setcategory_ID(event.target.value)} id="inputState" class="form-control" style={{ height: "45px", fontSize: "21px" }}>
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
                <div class="form-row">
                    <div class="form-group col-md-3">
                        <label for="inputCity">RAM</label>
                        <input required="true" onChange={(event) => setram(event.target.value)} type="text" class="form-control" style={{ height: "45px", fontSize: "21px" }} />
                        <p style={{ color: "red" }}>{validatorMSG ? validatorMSG.ram : ""}</p>
                    </div>

                    <div class="form-group col-md-3">
                        <label for="inputZip">ROM</label>
                        <input required="true" onChange={(event) => setrom(event.target.value)} type="text" class="form-control" style={{ height: "45px", fontSize: "21px" }} />
                        <p style={{ color: "red" }}>{validatorMSG ? validatorMSG.rom : ""}</p>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="inputZip">CPU</label>
                        <input required="true" onChange={(event) => setcpu(event.target.value)} type="text" class="form-control" style={{ height: "45px", fontSize: "21px" }} />
                        <p style={{ color: "red" }}>{validatorMSG ? validatorMSG.cpu : ""}</p>

                    </div>
                    <div class="form-group col-md-3">
                        <label for="inputZip">GPU</label>
                        <input required="true" onChange={(event) => setgpu(event.target.value)} type="text" class="form-control" style={{ height: "45px", fontSize: "21px" }} />
                        <p style={{ color: "red" }}>{validatorMSG ? validatorMSG.gpu : ""}</p>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputAddress2">Tiêu Đề</label>
                        <textarea required="true" onChange={(event) => setTitle(event.target.value)} style={{ height: "150px" }} class="form-control" rows="3"></textarea>
                        <p style={{ color: "red" }}>{validatorMSG ? validatorMSG.title : ""}</p>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputAddress2">Thông tin chi tiết</label>
                        <textarea required="true" onChange={(event) => setdescribes(event.target.value)} style={{ height: "150px" }} class="form-control" rows="3"></textarea>
                        <p style={{ color: "red" }}>{validatorMSG ? validatorMSG.describes : ""}</p>
                    </div>
                </div>

            </form>
            <button onClick={() => { handleAddProduct() }} class="btn btn-primary">ADD Product</button>
        </>
    )
}

export default Addproduct