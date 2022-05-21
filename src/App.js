import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Header/Navbar';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
