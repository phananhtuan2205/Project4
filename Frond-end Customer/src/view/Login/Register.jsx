import React, { useEffect, useState } from 'react'

import "./Register.css"
import { dk, findbyEmail } from "../../server/CustomerServer"
import { useHistory } from 'react-router-dom';
const Register = () => {
    const [customerName, setcustomerName] = useState();
    const [address, setaddress] = useState();
    const [birth, setbirth] = useState();
    const [phoneNumber, setphoneNumber] = useState();
    const [identityCard, setidentityCard] = useState();
    const [email, setemail] = useState();
    const [pass, setpass] = useState();

    const [messageErr, setmessageErr] = useState();

    const check = async (data) => {

        let rgExp = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,4}$/
        let message = {}
        if (!rgExp.test(data.email)) {

            message = "Email is not valid"
            setmessageErr(message);
            return false
        }

        return true;
    }

    const history = useHistory()
    const handleClick = async () => {



        let date = new Date();
        let string = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()

        let data = {

            "customerName": customerName,
            "address": address,
            "birth": birth,
            "phoneNumber": phoneNumber,
            "identityCard": identityCard,
            "email": email,
            "pass": pass,
            "createdAt": string,
            "updatedAt": string
        }
        let a = check(data);
        console.log(a)
        if (a) {
            await dk(data);

        }
        history.push("/Login")
    }


    return (
        <>
            <form style={{ width: "80%", margin: "0% auto", marginTop: "20px" }}>
                {
                    messageErr != null ? <p style={{ color: "red" }}>{messageErr}</p> : ""
                }
                <div class="form-row">


                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Tên Người Dùng</label>
                        <input onChange={(event) => { setcustomerName(event.target.value) }} type="text" class="form-control" id="inputEmail4" placeholder="Name" />

                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputPassword4">Ngày Sinh</label>
                        <input onChange={(event) => { setbirth(event.target.value) }} type="date" class="form-control" id="inputPassword4" placeholder="Password" />

                    </div>
                </div>
                <div class="form-group">
                    <label for="inputAddress">Địa Chỉ</label>
                    <input onChange={(event) => { setaddress(event.target.value) }} type="text" class="form-control" id="inputAddress" placeholder="Address" />

                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Số Điện Thoại</label>
                        <input type="number" onChange={(event) => { setphoneNumber(event.target.value) }} class="form-control" id="inputEmail4" placeholder="Number Phone" />

                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputPassword4">ZIP</label>
                        <input onChange={(event) => { setidentityCard(event.target.value) }} type="text" class="form-control" id="inputPassword4" placeholder="ZIP" />

                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputCity">Email</label>
                        <input required={true} onChange={(event) => { setemail(event.target.value) }} type="email" class="form-control" id="inputCity" placeholder="Email" />

                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputCity">Password</label>
                        <input onChange={(event) => { setpass(event.target.value) }} type="password" class="form-control" id="inputCity" placeholder="password" />

                    </div>

                </div>

                <div class="text-center text-lg-start mt-4 pt-2">
                    <button onClick={() => { handleClick() }} type="button" class="btn btn-primary btn-lg"
                        style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem", fontSize: "20px" }}>Login</button>
                    <p class="small fw-bold mt-2 pt-1 mb-0">Đăng Nhâp <a href="/Login"
                        class="link-danger">Create</a></p>
                </div>
            </form>
        </>
    )
}



export default Register;