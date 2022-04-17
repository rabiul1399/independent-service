import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    return (
        <div className=' w-50 mx-auto mt-5'>
        <h3 className='text-center'> This is Login</h3>
        <SocialLogin></SocialLogin>

        <div className=''>

            <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
                       
                        <Form.Control size="lg" type="name" placeholder=" Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhone">                 
                       <Form.Control size="lg" type="phone" placeholder=" Phone" />
                    </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control size="lg" type="email" placeholder=" Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control size="lg" type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control size="lg" type="password" placeholder="Confirm Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button size="lg" variant="primary w-50 mx-auto d-block" type="submit">
                    Submit
                </Button>
            </Form>
            <p className='mt-3 fs-5'>Already have an account?<Link to='/login' className='text-primary  cursor  pe-auto text-decoration-none' >Register Now</Link></p>

        </div>
    </div>
    );
};

export default Register;