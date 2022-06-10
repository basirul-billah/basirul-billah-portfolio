import React, { useEffect, useState } from 'react';
import figdet from '../assets/images/fidget-warehouse.jpg'
import auto from '../assets/images/auto-parts.jpg'
import lawyer from '../assets/images/lawyer-attorney.jpg'
import sci from '../assets/images/sci-axcel.jpg'
import penguine from '../assets/images/penguine.jpg'
import Project from './Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('projectdata.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div id='projects' className='mb-60'>
            <div className='text-center mb-10 flex flex-col justify-center items-center'>
                <h3 className='lg:text-2xl font-bold text-accent'>Portfolio</h3>
                <h1 className='lg:text-4xl font-bold'>Check Out My Works</h1>
                <div className='bg-accent w-60 h-1 mt-3' />
            </div>
            <div className='lg:grid grid-cols-3 gap-2'>
                {
                    projects.map((project, index) => <Project
                        key={index}
                        project={project}
                    ></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;