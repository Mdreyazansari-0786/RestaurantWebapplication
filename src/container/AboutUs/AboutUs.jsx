import React from 'react';
import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="" /> 

    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__abouotus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
         <img src={images.spoon} alt="spoon" className='spoon__img' />
         <p className='p__opensans'>A culinary haven, offering exquisite flavors, impeccable service, and an unforgettable dining experience. From our handcrafted dishes to our warm ambiance, we invite you to savor the essence of our exceptional restaurant.</p>
         <button type='button'style={{float:"right"}} className='custom__button'>Know more</button>

      </div>
      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="about__knife" />

      </div>
      <div className='app__abouotus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
         <img src={images.spoon} alt="spoon" className='spoon__img' />
         <p className='p__opensans'>A rich legacy of culinary excellence, our restaurant has been serving delectable dishes for decades. From humble beginnings to becoming a beloved dining destination, our history is steeped in passion and flavor..</p>
         <button type='button' className='custom__button'>Know more</button>

      </div>

    </div>

    
  </div>
);

export default AboutUs;
