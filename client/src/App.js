import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import HeaderUI from './components/HeaderMUI'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Shop from './pages/Shop'
import Weather from './pages/Weather'

function App() {
  return (
    <>
      <Router>
      <HeaderUI />
        <div className='container'>
         
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/weather' element={<Weather />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
