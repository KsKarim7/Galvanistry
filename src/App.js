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
import Blogs from './Pages/Others/Blogs';
import Portfolio from './Pages/Others/Portfolio';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import MyProfile from './Pages/Dashboard/MyProfile';
import AddReview from './Pages/Dashboard/AddReview';
import MyOrders from './Pages/Dashboard/MyOrders';
import Footer from './Pages/Shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import Users from './Pages/Dashboard/Users';
import ManageProducts from './Pages/Dashboard/ManageProducts';

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='addReview' element={<AddReview />}></Route>
          <Route path='myOrders' element={<MyOrders />}></Route>
          <Route path='users' element={<Users />}></Route>
          <Route path='manage' element={<ManageProducts />}></Route>
        </Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/product/:id' element={<Checkout />}></Route>
        {/* <Route path='/order' element={<Order />}></Route> */}

        <Route path='*' element={<NotFound />}></Route>
      </Routes >
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
