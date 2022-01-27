// import Orders from './Orders';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import HomePage from './HomePage';
// import RegisterPage from './RegisterPage';
import {  BrowserRouter,  Routes,  Route} from "react-router-dom";


import Orders from './components/Orders';
import OrderCreate from './components/createorder';
import AddOrder from './components/addorder';
import Homepage from './components/HomePage/index';
import RegisterPage from './components/RegisterPage';
import PrivateRoute from './App/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
<Routes>
      <Route exact path='/' element={<Homepage/>} />
      <Route exact path='/register' element={<RegisterPage/>} />  
      <Route exact path='/preorders' element={<PrivateRoute component={AddOrder} />}/>
      <Route exact path='/createorder' element={<OrderCreate/>} />
      <Route exact path='/orders' element={<Orders/>} /> 
      </Routes>
    </BrowserRouter>

  );
}

export default App;
