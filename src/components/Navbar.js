import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Chat</span>
      <div className='user'>
        <img src="https://www.pexels.com/photo/nowhere-13743846/" alt=""/>
        <span>John</span>
        <button>logout </button>
      </div>
    </div>
  )
}

export default Navbar