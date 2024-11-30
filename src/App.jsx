import React from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const routes = (
  <Router>
    {
      // useNavigate() may be used only in the context of a <Router> component.
      // => Navbar have to called inside Router component
    }
    <Navbar/>

    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/dashboard' element={<Home/>} />
    </Routes>
  </Router>
)

function App() {
  return (
    <div>
      <div>
        {routes}
      </div>
    </div>
  )
}

export default App
