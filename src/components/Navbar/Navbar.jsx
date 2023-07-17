import React,{useState} from 'react';

import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';


const Navbar = () => {
  const [toggleMenu,setToggleMenu]=useState(false);
  return(
 <nav className='app_navbar'>
  <div className='app_navbar_logo'>
    <img src={images.gericht} alt="App logo" />

  </div>
  <ul className='app__navbar-links' >
    <li className='p_opensans'><a href="#home">Home</a></li>
    <li className='p_opensans'><a href="#about">About</a></li>
    <li className='p_opensans'><a href="#Menu">Menu</a></li>
    <li className='p_opensans'><a href="Awards">Awards</a></li>
    <li className='p_opensans'><a href="#Contact">Contact</a></li>

  </ul>
  <div className='app__navbar-login'>
    <a href="#login" className='p__opensans'>Login / Register</a>
    <div/>
    <a href="/" className='p__opensans'>Book Table</a>

  </div>
  <div className='app__nav-smallscreen'>
    <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=>setToggleMenu(true)}/>
    {toggleMenu && (



    <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
      <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={()=>setToggleMenu(false)}/>
      <ul className='app__navbar-smallscreen_links'>
    <li className='p_opensans'><a href="#home">Home</a></li>
    <li className='p_opensans'><a href="#about">About</a></li>
    <li className='p_opensans'><a href="#menu">Menu</a></li>
    <li className='p_opensans'><a href="#awards">Award</a></li>
    <li className='p_opensans'><a href="#contact">Contact</a></li>

  </ul>

    </div>
)}


  

  </div>
 </nav>

)};

export default Navbar;
