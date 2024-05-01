import React from 'react';
import NavAlter from './NavAlter';
import Tasks from './tasks';
const Home = () => {
    return (
            <div className='home w-full h-full md:text-base text-sm relative' 
                style={{ 
                    background: "url('/assets/images/bg.jpg') no-repeat center center fixed", 
                    WebkitBackgroundSize: 'cover',
                    MozBackgroundSize: 'cover',
                    OBackgroundSize: 'cover',
                    backgroundSize: 'cover'
                }}
            >            
            <NavAlter />
            <Tasks />
        </div>
    );
};

export default Home;
