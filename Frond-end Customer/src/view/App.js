import "../../node_modules/bootstrap/scss/bootstrap.scss";
import './App.scss';
import Home from './Home';
import AllProducts from './AllProducts';
import Shipping from './Shipping';
import Cart from './Cart';
import Baohanh from './Baohanh';
import Login from './Login/Login';

import DetailsProduct from './DetailsProduct';
import { useHistory } from 'react-router-dom';
import Register from "./Login/Register";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {

  return (
    <div className='container-app'>
      <BrowserRouter useHistory={useHistory}>

        <Switch >
          <Route render={() => {
            return localStorage.getItem("customer") ? <Home /> : <Redirect to="/Login" />
          }} path='/home' exact />
          <Route render={() => {
            return localStorage.getItem("customer") ? <AllProducts /> : <Redirect to="/Login" />
          }} path='/allproduct/category/:id'></Route>
          <Route render={() => {
            return localStorage.getItem("customer") ? <Home /> : <Redirect to="/Login" />
          }} path='/allproduct/category/'></Route>
          <Route render={() => {
            return localStorage.getItem("customer") ? <Shipping /> : <Redirect to="/Login" />
          }} path='/shipping' exact></Route>
          <Route render={() => {
            return localStorage.getItem("customer") ? <Baohanh /> : <Redirect to="/Login" />
          }} path='/baohanh' exact></Route>
          <Route render={() => {
            return localStorage.getItem("customer") ? <Cart /> : <Redirect to="/Login" />
          }} path='/cart' exact></Route>
          <Route render={() => {
            return localStorage.getItem("customer") ? <DetailsProduct /> : <Redirect to="/Login" />
          }} path='/productID/:id' exact></Route>
          <Route path='/Login' exact><Login /></Route>
          <Route path='/register' exact><Register /></Route>
        </Switch>



      </BrowserRouter>


    </div>

  )
}

export default App;
