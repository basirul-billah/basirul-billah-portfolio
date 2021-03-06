import React from 'react';
import illustration1 from '../assets/images/illustration1.jpg';
import './componentStyles.css';

const Banner = () => {
    return (
        <div id='banner' className="w-full h-80 flex flex-col-reverse lg:flex-row justify-center items-center mb-20">
            <div className="m-5 lg:m-0 lg:w-1/2">
                <h1 className="text-4xl text-center lg:text-left lg:text-5xl font-bold mb-5 text-accent">Basirul Billah</h1>
                <h2 className="lg:text-3xl mb-10">Leading you to global village by providing you the best possible web services, using best practices and technologies.</h2>
                <a href='/home#contact' className='btn btn-accent text-white'>Get Started</a>
            </div>
            <div className="mt-38 lg:w-1/2">
                <img className='floating' src={illustration1} alt="banner-illustration" 
                />
            </div>
        </div>
    );
};

export default Banner;