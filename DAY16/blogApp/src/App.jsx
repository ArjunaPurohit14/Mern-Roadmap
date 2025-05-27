import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import PostList from './components/PostList.jsx'


function App() {
 
  return (
    <div className='min-h-screen flex flex-col bg-[#f9f9f9] text-gray-800'>
   <Navbar/>
   <Hero/>
   <PostList/>
    </div>
  )
}

export default App

