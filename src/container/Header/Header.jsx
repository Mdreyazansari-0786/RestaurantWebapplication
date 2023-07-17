import React from 'react';
import {images} from '../../constants';

import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour"/>
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{margin:"2rem 0"}}>Welcome to our exquisite restaurant, where you'll embark on a culinary journey filled with delectable flavors and gourmet creations. Our menu offers a tantalizing selection of mouthwatering dishes that are sure to leave you craving for more. </p>
      <button type='button'className='custom__button'>Explore Menu</button>


    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img" />

    </div>

  </div>
);

export default Header;
