import React from 'react';
import google from '../../../images/logo/google-logo-9824-32x32.ico';
import github from '../../../images/logo/Github_logo_PNG13.png';
import './SocialLogin.css';


const SocialLogin = () => {
    return (
        <div>

        <div className=''>
            <button type='button'  className='btnStyle btn border  btn-outline-light text-dark fw-bolder rounded-pill  w-75 d-block mx-auto my-3 fs-5'><img className='me-2' width={'45px'} src={google} alt="" /> Sign in with Google</button>
            {/* <button className='btn btn-success  d-block mx-auto w-50 my-3'><img className='' width={'70px'} src={Facebook} alt="" /> Facebook Sign In</button> */}
            <button className='btnStyle btn border btn-outline-light text-dark rounded-pill rounded-pill d-block mx-auto w-75 fs-5 fw-bolder'><img className='' width={'75px'} src={github} alt=""/> Sign in with Githhub</button>
        </div>

        <div className='d-flex align-items-center'>
            <div style={{height:'1px'}} className='bg-secondary w-50'></div>
            <p className='mt-2 px-2'>or</p>
            <div style={{height:'1px'}} className='bg-secondary w-50'></div>
           
        </div>
    </div>
    );
};

export default SocialLogin;