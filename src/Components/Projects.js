import React from 'react';
import figdet from '../assets/images/fidget-warehouse.jpg'
import auto from '../assets/images/auto-parts.jpg'
import lawyer from '../assets/images/lawyer-attorney.jpg'
import sci from '../assets/images/sci-axcel.jpg'
import penguine from '../assets/images/penguine.jpg'

const Projects = () => {
    return (
        <div className='mb-60'>
            <div className='text-center mb-10 flex flex-col justify-center items-center'>
                <h3 className='text-2xl font-bold text-accent'>Portfolio</h3>
                <h1 className='text-4xl font-bold'>Check Out My Works</h1>
                <div className='bg-accent w-60 h-1 mt-3'/>
            </div>
            <div className='grid grid-cols-3 gap-2'>
                <div className="card w-auto bg-base-100 shadow-xl image-full">
                    <figure><img src={figdet} alt="fidget-warehouse" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Fidget Warehouse</h2>
                        <p>A warehouse management software with authentication.</p>
                        <div className="card-actions justify-center">
                            <a target='_blank' rel='noreferrer' href='https://github.com/basirul-billah/fidget-warehouse' className="btn btn-accent">Check It Out</a>
                        </div>
                    </div>
                </div>
                <div className="card w-auto bg-base-100 shadow-xl image-full">
                    <figure><img src={auto} alt="auto-parts-manufacturer" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Auto Parts Manufacturer</h2>
                        <p>An automotive parts manufacturer website for ordering and managing auto parts.</p>
                        <div className="card-actions justify-center">
                            <a target='_blank' rel='noreferrer' href='https://github.com/basirul-billah/auto-parts-manufacturer' className="btn btn-accent">Check It Out</a>
                        </div>
                    </div>
                </div>
                <div className="card w-auto bg-base-100 shadow-xl image-full">
                    <figure><img src={lawyer} alt="lawyer-and-attoreny" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Lawyer & Attorney</h2>
                        <p>A warehouse management software with authentication.</p>
                        <div className="card-actions justify-center">
                            <a target='_blank' rel='noreferrer' href='https://github.com/basirul-billah/lawyer-and-attorney' className="btn btn-accent">Check It Out</a>
                        </div>
                    </div>
                </div>
                <div className="card w-auto bg-base-100 shadow-xl image-full">
                    <figure><img src={sci} alt="sci-axcel-toys" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Sci Axcel Toys</h2>
                        <p>A simple e-commerce implemented using localStorage.</p>
                        <div className="card-actions justify-center">
                            <a target='_blank' rel='noreferrer' href='https://github.com/basirul-billah/sci-axcel-toys' className="btn btn-accent">Check It Out</a>
                        </div>
                    </div>
                </div>
                <div className="card w-auto bg-base-100 shadow-xl image-full">
                    <figure><img src={penguine} alt="penguine-fashion" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Penguine Fashion</h2>
                        <p>A simple e-commerce website built with tailwind.</p>
                        <div className="card-actions justify-center">
                            <a target='_blank' rel='noreferrer' href='https://github.com/basirul-billah/penguin-fashion-tailwind' className="btn btn-accent">Check It Out</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;