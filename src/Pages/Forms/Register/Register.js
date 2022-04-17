import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const Register = () => {
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    let errorElement ;

    const [
        createUserWithEmailAndPassword,
        user,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      if (error) {
        errorElement = <p>Error : {error.message} </p>;
     
      }
     
      if (user) {
       navigate('/home')
      }


      const handleEmailSignIn = event =>{
        setEmail(event.target.value);
         

      }
      const handleEmailPassword = event =>{
        setPassword(event.target.value);
      }
      const handleSubmit = event =>{
          event.preventDefault();

          createUserWithEmailAndPassword(email, password)

      }

    return (
        <div className=' w-50 mx-auto mt-5'>
        <h3 className='text-center'> This is Login</h3>
        <SocialLogin></SocialLogin>

        <div className=''>

            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                       
                        <Form.Control size="lg" type="name" placeholder=" Name" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhone">                 
                       <Form.Control size="lg" type="phone" placeholder=" Phone" required/>
                    </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={handleEmailSignIn} size="lg" type="email" placeholder=" Email" required/>
                </Form.Group>

                <Form.Group onBlur={handleEmailPassword} className="mb-3" controlId="formBasicPassword">
                    <Form.Control size="lg" type="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control size="lg" type="password" placeholder="Confirm Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                {errorElement}
                <Button size="lg" variant="primary w-50 mx-auto d-block" type="submit">
                    Submit
                </Button>
            </Form>
            <p className='mt-3 fs-5'>Already have an account?<Link to='/login' className='text-primary  cursor  pe-auto text-decoration-none' >Login</Link></p>

        </div>
    </div>
    );
};

export default Register;