import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';
import Loading from '../Shared/Loading/Loading';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const location = useLocation();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let from = location.state?.from?.pathname || '/'

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, sending, rError] = useSendPasswordResetEmail(auth);

    const [token] = useToken(user || gUser)

    const handleLogin = async e => {
        e.preventDefault();
        await signInWithEmailAndPassword(email, password);
        // console.log('user logged in')
    }

    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    }

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true })
        }
    }, [token, from, navigate])

    const resetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email Sent')
        }
        else {
            toast('First enter your Email Address!')
        }
    }



    let loginError;
    if (error || gError || rError) {
        loginError = <p className='text-red-500'><small>{error.message || gError?.message}</small></p>
    }
    if (loading || gLoading || sending) {
        return <Loading></Loading>
    }
    if (user || gUser) {
        navigate(from, { replace: true })
    }

    return (
        <div>
            <h3 class="text-xl text-secondary text-ellipsis text-center my-5 font-bold">Login to your Account</h3>
            <form onSubmit={handleLogin} action="" className='justify-items-center gap-4 grid grid-cols-1 '>
                <input onBlur={handleEmailBlur} type="email" placeholder="Enter your email " class="input input-bordered w-full max-w-xs" />
                <input onBlur={handlePasswordBlur} type="password" placeholder="Password" class="input input-bordered w-full max-w-xs" />
                {loginError}
                <p className=' text-neutral ml-24'>
                    Forget Password?  <button onClick={resetPassword} className=' text-primary pl-1 font-bold '>Reset Password</button>
                </p>
                <input type="submit" value='Login' class="input input-bordered bg-secondary text-white font-bold text-xl w-full max-w-xs" />
                {/* <button className='btn btn-secondary  text-white font-bold text-xl w-full max-w-xs'>Login</button> */}
                <div className='divider'>OR</div>
                <button onClick={() => signInWithGoogle()} className='btn btn-outline'>Login with Google</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;