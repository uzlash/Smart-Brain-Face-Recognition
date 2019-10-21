//The logo component is where we have our logo using react tilt library
import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png'

const Logo = () => {
    return(
        <div className='ma4 mt0'>
            <Tilt className="Tilt br-2 shadow-2" options={{ max : 50 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner pa3"> <img src={brain} alt='brain logo' style={{paddingTop: '5px'}} /></div>
        </Tilt>
        </div>
    );
}

export default Logo;