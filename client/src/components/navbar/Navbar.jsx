import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import "./Navbar.scss"

const Navbar = () => {
  const [active,setActive] = useState(false)
  const [open,setOpen] = useState(false)

  const {pathname} = useLocation()

const isActive = () => {
  window.scrollY > 0 ? setActive(true) : setActive(false);
};

useEffect(() => {
  window.addEventListener("scroll", isActive);

  return () => {
    window.removeEventListener("scroll", isActive)
  };
}, []);

const currentUser = {
  id:1,
  username:"Angela Mark",
  isSeller: true
}

  return (
    <div className={active || pathname !=="/" ? "navbar active" : "navbar"}>
        <div className="container">
            <div className="logo">
              <Link to="/" className='link'>
                <span className="text">fiverr</span>
              </Link>
                <span className="dot">.</span>
            </div>
            <div className="links">
                <span>Fiverr Business</span>
                <span>Explore</span>
                <span>English</span>
                <span>Sign in</span>
                {!currentUser?.isSeller && <span>Become a Seller</span>}
                {!currentUser && <button>Join</button>}
                {currentUser && (
                  <div className="user" onClick={()=>setOpen(!open)}>
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <span>{currentUser?.username}</span>
                    {open && <div className="options">
                      {currentUser?.isSeller && (
                        <>
                          <Link className='link' to="/mygigs">Gigs</Link>
                          <Link className='link' to="/add">Add New Gig</Link>
                        </>
                      )}
                      <Link className='link' to="orders">Orders</Link>
                      <Link className='link' to="messages">Messages</Link>
                      <Link className='link' to="/">Logout</Link>
                    </div>}
                  </div>
                )}
            </div>
        </div>
        { (active || pathname !=="/") && (
          <>
            <hr />
            <div className="menu">
              <Link className='link' to="/">Graphics & Design</Link>
              <Link className='link' to="/">Video & Animation</Link>
              <Link className='link' to="/">Writing & Translation</Link>
              <Link className='link' to="/">AI Services</Link>
              <Link className='link' to="/">Digital Marketing</Link>
              <Link className='link' to="/">Music & Audio</Link>
              <Link className='link' to="/">Program & Tech</Link>
              <Link className='link' to="/">Business</Link>
              <Link className='link' to="/">LifeStyle</Link>
            </div>
          </>
        )}
    </div>
  )
}

export default Navbar