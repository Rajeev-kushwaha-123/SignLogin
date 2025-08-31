import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'  // ✅ correct import

const Navbar = () => {
  
  const navigate = useNavigate() 
  

  return (
    <div className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <img 
        src={assets.logo} 
        alt="logo" 
        className="h-10 cursor-pointer"
      />

      {/* Login Button */}
      <button onClick={()=>{navigate('/login')}}
      className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
        Login
        <img 
          src={assets.arrow_icon} 
          alt="arrow icon" 
          className="w-4 h-4"
        />
      </button>
    </div>                                                                                                         
  )
}

export default Navbar;
