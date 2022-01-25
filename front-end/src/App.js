// import Orders from './Orders';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import HomePage from './HomePage';
// import RegisterPage from './RegisterPage';

import Orders from './components/Orders';
import OrderCreate from './components/createorder';
import AddOrder from './components/addorder';
import Homepage from './components/HomePage/index';
import RegisterPage from './components/RegisterPage';
import PrivateRoute from './App/PrivateRoute';

function App() {
  return (
    <Router>
<Routes>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/register' component={RegisterPage} /> 
      <PrivateRoute exact path='/preorders' component={AddOrder} />
      <Route exact path='/createorder' component={OrderCreate} />
      <Route exact path='/orders' component={Orders} /> 
      </Routes>
    </Router>

  );
}

export default App;
