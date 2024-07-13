import './App.css';

import { Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import Home from './screens/Home';
import Signup from './screens/Signup.js';
import Login from './screens/Login.js';
import { CartProvider } from './components/ContextReducer.js';
import MyOrder from './screens/MyOrder.js';

function App() {
  return (
    <CartProvider>
    <Routes>
      <Route path='/' element={ <Home />}/>
      <Route path='/Login' element={ <Login />}/>
      <Route path='/createuser' element={<Signup/>}/>
      <Route path='/myOrder' element={<MyOrder/>}/>
    </Routes>
    </CartProvider>
   
  );
}

export default App;
