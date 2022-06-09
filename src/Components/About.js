import React from 'react';
import basirulbillah from '../assets/images/basirulbillah.jpg'

const About = () => {
    return (
        <div className='h-screen flex justify-center text-neutral'>
            <div className='w-1/2'>
                <img className='w-3/4' src={basirulbillah} alt="basirul-billah" />
            </div>
            <div className='w-1/2'>
                <h1 className='text-3xl font-bold mb-5 text-accent'>Fun-loving guy!</h1>
                <p className='text-lg mb-5'>I am a simple fun-loving guy always trying to improve myself. I love computers, I love programming and I also love to solve problems. I have keen interest in software development, passionate about working in a team and crazy about astronomy. I am currently pursuing Bachelors in a university in Bangladesh. Feel free to talk to me!</p>
                <div className='flex gap-2'>
                    <div className="rounded-xl w-1/2 bg-accent text-primary-content hover:bg-accent-focus">
                        <div className="card-body">
                            <h2 className="card-title">Technologies</h2>
                            <p>Javascript, React, Tailwind, Express, Node, MongoDB</p>
                        </div>
                    </div>
                    <div className="rounded-xl w-1/2 bg-accent text-primary-content hover:bg-accent-focus">
                        <div className="card-body">
                            <h2 className="card-title">Projects</h2>
                            <p>Check out my projects on github!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;