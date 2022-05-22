import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    // const [token] = useToken(user || gUser)

    const handleLogin = async e => {
        e.preventDefault();
        await signInWithEmailAndPassword(email, password);
        console.log('user logged in')
    }

    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    }

    let loginError;
    if (error || gError) {
        loginError = <p className='text-red-500'><small>{error.message || gError?.message}</small></p>
    }
    if (loading || gLoading) {
        return <Loading></Loading>
    }
    // if (token) {
    //     navigate('/')
    // }

    return (
        <div>
            <h3 class="text-xl text-secondary text-ellipsis text-center my-5 font-bold">Login to your Account</h3>
            <form onSubmit={handleLogin} action="" className='justify-items-center gap-4 grid grid-cols-1 '>
                <input onBlur={handleEmailBlur} type="email" placeholder="Enter your email " class="input input-bordered w-full max-w-xs" />
                <input onBlur={handlePasswordBlur} type="password" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                {loginError}
                <input type="submit" value='Login' class="input input-bordered bg-secondary text-white font-bold text-xl w-full max-w-xs" />
                {/* <button className='btn btn-secondary  text-white font-bold text-xl w-full max-w-xs'>Login</button> */}
                <div className='divider'>OR</div>
                <button onClick={() => signInWithGoogle()} className='btn btn-outline'>Login with Google</button>
            </form>
        </div>
    );
};

export default Login;