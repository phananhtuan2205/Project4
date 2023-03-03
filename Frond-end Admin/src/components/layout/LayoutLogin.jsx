import React from "react";
import { Route, BrowserRouter } from 'react-router-dom'
import Login from "../../pages/Login/Login";

const LayoutLogin = () => {
    <BrowserRouter>
        <Route path='/login' component={Login} exact />
    </BrowserRouter>
}
export default LayoutLogin