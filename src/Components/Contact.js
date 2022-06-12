import React from 'react';

const Contact = () => {
    return (
        <div id='contact'>
            <div>
                <div className='text-center mb-10 flex flex-col justify-center items-center'>
                    <h3 className='lg:text-2xl font-bold text-accent'>Contact Me</h3>
                    <h1 className='lg:text-4xl font-bold'>Let's Talk About Your Project</h1>
                    <div className='bg-accent w-60 h-1 mt-3' />
                </div>
                <div className='border rounded-xl p-5 m-5 lg:m-0 flex flex-col justify-center items-center'>
                    <form action="https://formsubmit.co/c14d74b05c8bd3b029fe6f4ffab259c2" method="POST">
                        <div className='flex gap-3'>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="e.g. John Doe" className="input input-bordered w-full max-w-xs" required/>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="e.g. john@email.com" className="input input-bordered w-full max-w-xs" required/>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Subject</span>
                            </label>
                            <input type="text" name="subject" placeholder="write your subject here" className="input input-bordered" />
                        </div>
                        <div className="form-control mb-3">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea type="text" name="message" placeholder="write your message here" className="input input-bordered h-32" required/>
                        </div>
                        <button className="btn btn-accent text-white">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;