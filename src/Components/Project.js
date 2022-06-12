import React from 'react';

const Project = ({ project }) => {
    const { name, description, github, image1 } = project;
    
    return (
        <div>
            <div className="card w-auto bg-base-100 shadow-xl image-full relative">
                <figure><img src={image1} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-center absolute top-36">
                        <a target='_blank' rel='noreferrer' href={github} className="btn btn-accent text-white">Check It Out</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;