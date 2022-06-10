import React from 'react';
import About from '../Components/About';
import Banner from '../Components/Banner';
import Contact from '../Components/Contact';
import Projects from '../Components/Projects';

const Home = () => {
    return (
        <div className="lg:p-32">
            <Banner></Banner>
            <About id='about'></About>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;