import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        console.log(name, email, photoURL, password);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            form.reset();
            console.log(user)
        })
        .catch(error => console.error(error));

    }

    return (
        <div className='p-20  flex flex-col items-center'>
            <form onSubmit={handleSubmit} className="p-10 shadow-2xl w-[450px] " >
                    <p className='text-center text-3xl font-regular'>Sign Up</p>
                    <div className="form-control">
                        <label className="label">
                                 <span className="label-text">Your Name</span>
                         </label>
                        <input type="text" name='name' placeholder="Your name" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                                 <span className="label-text">Photo URL</span>
                         </label>
                        <input type="text" name='photoURL' placeholder="Photo Url" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                                 <span className="label-text">Email</span>
                         </label>
                        <input type="email" name='email' placeholder="Your email" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Your password" className="input input-bordered" required/>
                    </div>
                    
                    <div className="form-control mt-6">
                        <button className="btn bg-btn-color text-black border-btn-color hover:bg-orange-300 hover:border-orange-300">Sign Up</button>
                    </div>
                    <div className='text-center'>
                            <small className='mr-2'>Already have an account?</small>   
                            <Link to='/login' className="label-text-alt link link-hover text-orange-400">Please Login</Link>
                    </div>
            </form>
        </div>
    );
};

export default Register;