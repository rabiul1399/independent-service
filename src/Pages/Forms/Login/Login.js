import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  let navigate = useNavigate();
  

  let errorElement;
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [
    signInWithEmailAndPassword,
    user,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail] = useSendPasswordResetEmail(
    auth
  );

  if(user) {
    navigate(from, { replace: true });
  }

  if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }


  const handleSubmit = event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);

  };
  const navigateRegister = event => {
    navigate('/register');
}

  const handleResetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast('Sent email');
    }
    else {
      toast('Please Enter Your Email Address');
    }
  };

  return (
    <div className=' w-50 mx-auto mt-5'>
      <h3 className='text-center mb-5 text-success'> Please Login</h3>
      <SocialLogin></SocialLogin>

      <div className=''>

        <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control ref={emailRef} size="lg" type="email" placeholder="Enter 
                        Email" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control ref={passwordRef} size="lg" type="password" placeholder="Password" required />
          </Form.Group>
         
          
          <Button size="lg" variant="primary w-50 mx-auto d-block" type="submit">
            Login
          </Button>
        </Form>
           
        {errorElement}
       
        <p className='mt-3 fs-5'>Forget password? <Link to='' onClick={handleResetPassword}
          className='text-primary  cursor pe-auto text-decoration-none' >Reset password</Link></p>

        <p className='mt-3 fs-5'>Don't have an account?<Link to='/register' onClick={navigateRegister}className='text-primary  cursor pe-auto text-decoration-none' >Register Now</Link></p>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;