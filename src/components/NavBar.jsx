import React from 'react'
import logo from '../public/images/nav-logo.svg'

const NavBar = () => {
  return (
    <div className='fixed top-0 left-00 z-50 md:p-9 p-3'> 
        <img src={logo} alt="" className='md:w-24 w-20'/>
      
    </div>
  )
}

export default NavBar
