import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {img,name,description,id} =service;
    const navigate = useNavigate();
    const navigateServiceDetail = id=>{
     navigate( `/details/${id}`)
    }
    return (
        <div className=' g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card border-light shadow-sm  mb-5 bg-body rounded"  >
            
            <img src={img} height={'220px'} className="card-img-top  w-100" alt="..."/>
                <div className="card-body ">
                    <h4 className="card-title text-success">{name}</h4>
                    <p className="card-text">{description}</p>
                    <div className='text-center mx-auto'>
                    <button onClick={() => navigateServiceDetail(id)} to="/details" className="btn btn-primary ">Read More</button>
                    </div>
                </div>
        </div>
        </div>
    );
};



export default Service;


