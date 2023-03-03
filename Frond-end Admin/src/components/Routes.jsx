import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Products from '../pages/Products'
import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Addproduct from '../pages/Product/Addproduct'
import Updateproduct from '../pages/Product/Updateproduct'
import Login from '../pages/Login/Login'


const Routes = () => {
    return (
        <Switch>
            <Route render={() => {
                return localStorage.getItem("userinfor") ? <Dashboard /> : <Redirect to="/login" />
            }} path='/home' />
            <Route render={() => {
                return localStorage.getItem("userinfor") ? <Customers /> : <Redirect to="/login" />
            }} path='/customers' />
            <Route render={() => {
                return localStorage.getItem("userinfor") ? <Products /> : <Redirect to="/login" />
            }} path='/products' />
            <Route render={() => {
                return localStorage.getItem("userinfor") ? <Addproduct /> : <Redirect to="/login" />
            }} path='/addproduct' />
            <Route render={() => {
                return localStorage.getItem("userinfor") ? <Updateproduct /> : <Redirect to="/login" />
            }} path='/updateproduct/:id' />
            <Route render={() => {
                return !localStorage.getItem("userinfor") ? <Login /> : <Redirect to="/home" />
            }} path='/login' exact />
        </Switch>
    )
}

export default Routes
