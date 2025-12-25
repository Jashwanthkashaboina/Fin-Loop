import React from 'react';
import Awards from './Awards';
import Hero from './Hero';
import Pricing from './Pricing';
import Stats  from './Stats';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';

// <></> -- this is called Empty React Fragment
function HomePage() {
    return ( 
        <>
            <Hero />
            <Awards/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
        </>

     );
}

export default HomePage
