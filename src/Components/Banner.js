import React from 'react';
import illustration1 from '../assets/images/illustration1.jpg'

const Banner = () => {
    return (
        <div className="w-full h-80 flex justify-center items-center mb-60">
            <div className="w-1/2">
                <h1 className="text-5xl font-bold mb-5 text-accent">Basirul Billah</h1>
                <h2 className="text-3xl mb-10">Leading you to global village by providing you the best possible web services, using best practices and technologies.</h2>
                <button className='btn btn-accent'>Get Started</button>
            </div>
            <div className="w-1/2">
                <img src={illustration1} alt="banner-illustration" 
                />
            </div>
        </div>
    );
};

export default Banner;