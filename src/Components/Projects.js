import React, { useEffect, useState } from 'react';
import Project from './Project';
import 'aos/dist/aos.css';
import Aos from 'aos';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        Aos.init({duration: 3000});

        fetch('projectdata.json')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, [])
    
    return (
        <div id='projects' className='mb-60'>
            <div data-aos='fade-up' className='text-center mb-10 flex flex-col justify-center items-center'>
                <h3 className='lg:text-2xl font-bold text-accent'>Portfolio</h3>
                <h1 className='lg:text-4xl font-bold'>Check Out My Works</h1>
                <div className='bg-accent w-60 h-1 mt-3' />
            </div>
            <div data-aos='slide-up' className='lg:grid grid-cols-3 gap-2'>
                {
                    projects.map(project => <Project
                        key={project.id}
                        project={project}
                    ></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;