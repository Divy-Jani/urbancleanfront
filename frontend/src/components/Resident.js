import React from 'react'
import './Resident.css';
import ResidentForm from './Residentform';


import { Link } from 'react-router-dom';

import { useState } from 'react';


function Resident() {


    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (

   <>
  
    <div className='Bg3'>
    <nav className="navbar">
    <div className="navbar-container">
      <a href="#" className="navbar-logo">
        <img src="/images/logo.png" alt="Logo" />
      </a>
      <div className="navbar-toggle" onClick={toggleMobileMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <li className="navbar-item"><a href="#" className="navbar-link">Home</a></li>
        <li className="navbar-item"><a href="#" className="navbar-link">About</a></li>
        <li className="navbar-item"><a href="#" className="navbar-link">Services</a></li>
        <li className="navbar-item"><Link to="/login" className="rounded-button">Divy</Link></li>
        </ul>
    </div>
  
  </nav>
   
   <ResidentForm/>

  

  </div>
  </>
  
  )
}

export default Resident