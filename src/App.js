import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Header/Navbar';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import ScrollToTop from './Pages/Shared/ScrollToTop';
import Dashboard from './Pages/Dashboard/Dashboard';
import SignUp from './Pages/Login/SignUp';
import Checkout from './Pages/Checkout/Checkout';
import Order from './Pages/Checkout/Order';

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/product/:id' element={<Checkout />}></Route>
        {/* <Route path='/order' element={<Order />}></Route> */}

        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
