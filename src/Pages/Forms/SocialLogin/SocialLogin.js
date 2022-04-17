import React from 'react';
import google from '../../../images/logo/google-logo-9824-32x32.ico';
import github from '../../../images/logo/Github_logo_PNG13.png';
import './SocialLogin.css';
import { useSignInWithGoogle,useSignInWithGithub } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate();

    const [signInWithGoogle, user] = useSignInWithGoogle(auth);

    const [signInWithGithub, user1] = useSignInWithGithub(auth);

    if (user || user1) {
        navigate('/home')
    };

    return (
        <div>

            <div className=''>
                <button onClick={() => signInWithGoogle()} type='button' className='btnStyle btn border  btn-outline-light text-dark fw-bolder rounded-pill  w-75 d-block mx-auto my-3 fs-5'><img className='me-2' width={'45px'} src={google} alt="" /> Sign in with Google</button>

                <button onClick={() => signInWithGithub()} className='btnStyle btn border btn-outline-light text-dark rounded-pill rounded-pill d-block mx-auto w-75 fs-5 fw-bolder'><img className='' width={'75px'} src={github} alt="" /> Sign in with Github</button>
            </div>
           

            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>

            </div>
        </div>
    );
};

export default SocialLogin;