import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {img,name,description,id,course} =service;
    const navigate = useNavigate();
    const navigateServiceDetail = id=>{
     navigate( `/details/${id}`)
    }
    // onClick={() => navigateServiceDetail(id)}
    return (
        <div className=' g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card border-light shadow-sm  mb-5 bg-body rounded"  >
            
            <img src={img} height={'220px'} className="card-img-top  w-100" alt="..."/>
                <div className="card-body ">
                    <h4 className="card-title text-success">{name}</h4>
                    <p className="card-text">{description}</p>
                    <h5>Course Price: {course}</h5>
                    <div className='text-center mx-auto mt-3'>
                   
              
                   <Link  to={ `/checkout/${id}`}  className="btn btn-primary ">Read More</Link>
               
                    </div>
                </div>
        </div>
        </div>
    );
};



export default Service;


