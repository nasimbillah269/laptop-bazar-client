import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(reslut => {
                const user = reslut.user;
                console.log(user);
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
                        <div className="form-control ">
                            <button className="btn btn-primary" >Google</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;