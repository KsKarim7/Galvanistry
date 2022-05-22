import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import Loading from '../Shared/Loading/Loading';
import { Form } from 'react-bootstrap';




const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
    ] = useCreateUserWithEmailAndPassword(auth);


    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [updateProfile, updating, updateErr] = useUpdateProfile(auth);

    // const [token] = useToken(user || gUser)
    const navigate = useNavigate()


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [agree, setAgree] = useState(false);



    // if (token) {
    //     navigate('/')
    // }

    if (loading || updating || gLoading) {
        return <Loading></Loading>
    }
    let signUpError;
    if (error || updateErr || gLoading) {
        signUpError = <p className='text-red-500'><small>{error?.message || updateErr?.message || gError?.message}
        </small></p>
    }


    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }

    const handleNameBlur = e => {
        setName(e.target.value);
    }

    const handlePasswordBlur = e => {
        setPassword(e.target.value)
    }
    const handleConfirmPasswordBlur = e => {
        setConfirmPassword(e.target.value)
    }
    const handleFormSubmit = async e => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match each other, type them correctly!')
            return;
        }
        if (password.length < 6) {
            setError('Password must contain at least 6 characters or above!')
        }
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name })
    }
    return (
        <div>
            <h3 className="text-xl text-secondary text-ellipsis text-center my-5 font-bold">Sign Up to your Account</h3>
            <form onSubmit={handleFormSubmit} action="" className='justify-items-center gap-4 grid grid-cols-1 '>
                <input onBlur={handleNameBlur} type="text" placeholder="Enter Your Name" className="input input-bordered w-full max-w-xs" />
                <input onBlur={handleEmailBlur} type="email" placeholder="Enter Your Email" className="input input-bordered w-full max-w-xs" required />
                <input type="password" onBlur={handlePasswordBlur} placeholder="Enter your password" className="input input-bordered w-full max-w-xs" required />
                <input onBlur={handleConfirmPasswordBlur} type="password" placeholder="Confirm your password" className="input input-bordered w-full max-w-xs" required />
                {signUpError}
                <Form.Group onClick={() => setAgree(!agree)} className="" controlId="formBasicCheckbox">
                    <Form.Check className={agree ? 'text-primary' : 'text-red-500'} type="checkbox" label="  Accept all terms and conditions" required />
                </Form.Group>
                <input
                    type="submit" value='Sign Up' className="input input-bordered bg-secondary text-white font-bold text-xl w-full max-w-xs" />
                <div className='divider'>OR</div>
                <button onClick={() => signInWithGoogle()} className='btn btn-outline'>Login with Google</button>
            </form>
        </div>
    );
};

export default SignUp;