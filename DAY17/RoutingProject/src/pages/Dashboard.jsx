import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Navbar from '../components/Navbar'


function Dashboard() {
  return (
    <div>   
        <Navbar/>   
    <Routes>
        <Route path='/home' element={<Home />}   />
        <Route path= '/about' element={<About/> }/>  
        <Route path= '/contact' element={<Contact/> }/>  
    </Routes>
    </div>
 
  )
}

export default Dashboard
