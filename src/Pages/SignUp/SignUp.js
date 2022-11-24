import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const SignUp = () => {
    const googleProvider = new GoogleAuthProvider();
    const { createUser, googleSignIn, updateUser } = useContext(AuthContext);
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const option = form.option.value;
        console.log(name, email, password, option);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                const userInfo = {
                    displayName: name
                }
                updateUser(userInfo)
                    .then(() => {
                        console.log('user update');

                    })
                    .catch(error => {
                        console.error('error', error)
                    })
            })
            .catch(error => {
                console.error('error', error)
            })
    }

    const handleGoogleSignUp = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error('error', error)
            })
    }
    return (
        <div className="hero h-[600px] flex justify-center items-center mt-12 ">
            <div className="hero-content  w-96 p-7">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 ">
                    <h3 className='text-xl text-center m-0'>Sign Up</h3>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">selected</span>
                            </label>
                            <select name="option" className="select select-bordered w-full max-w-xs ">
                                <option selected>user</option>
                                <option>seller</option>
                            </select>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <p className='mb-0'>Alrady have an account ? <Link className='text-secondary' to="/login">Login</Link></p>
                        <div className="divider">OR</div>
                        <div className="form-control ">
                            <button onClick={handleGoogleSignUp} className="btn btn-primary" >Google</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;