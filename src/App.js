import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Header/Navbar';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import ScrollToTop from './Pages/Shared/ScrollToTop';

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
