import React from 'react'
import './Hero.css';


import { useState } from 'react';


function Hero() {


    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
  <div className='home'>

  </div>
  )
}

export default Hero