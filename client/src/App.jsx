import { Route, Routes } from 'react-router-dom'
import { useContext } from 'react';
import { AppContext } from './context/AppContext';
import Home from './pages/Home';
import Result from './pages/Result';
import BuyCredit from './pages/BuyCredit';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';

function App() {
  const { showLogin } = useContext(AppContext);

  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
      <ToastContainer position='bottom-right'/>
      <NavBar />
      {showLogin && <Login />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/result' element={<Result />} />
        <Route path='/buy' element={<BuyCredit />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App