import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    return (
        <div className=' w-50 mx-auto mt-5'>
            <h3 className='text-center'> This is Login</h3>
            <SocialLogin></SocialLogin>

            <div className=''>

                <Form>
                
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                       
                        <Form.Control size="lg" type="email" placeholder="Enter 
                        Email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        
                        <Form.Control size="lg" type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Button size="lg" variant="primary w-50 mx-auto d-block" type="submit">
                    Login
                </Button>
                </Form>


                <p className='mt-3 fs-5'>Forget password? <Link to='/register'
                    className='text-primary  cursor pe-auto text-decoration-none' >Reset password</Link></p>

                <p className='mt-3 fs-5'>Don't have an account?<Link to='/register' className='text-primary  cursor pe-auto text-decoration-none' >Register Now</Link></p>

            </div>
        </div>
    );
};

export default Login;