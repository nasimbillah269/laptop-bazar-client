import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const googleProvider = new GoogleAuthProvider();
    const { signIn, googleSignIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        signIn(email, password)
            .then(reslut => {
                const user = reslut.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error('error', error)
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(reslut => {
                const user = reslut.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error('error', error)
            })
    }
    return (
        <div className="hero h-[600px] flex justify-center items-center ">
            <div className="hero-content w-96 p-7 ">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <h3 className='text-xl text-center'>Login</h3>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <p>Laptop bazar new account ? <Link className='text-secondary' to="/signup">Sign Up</Link></p>
                        <div className="divider">OR</div>
                    </form>
                    <div className='mx-auto mt-0 mb-4' >
                        <button onClick={handleGoogleSignIn} className="btn btn-primary px-28" >Google</button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Login;