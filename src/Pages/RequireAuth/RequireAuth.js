import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Spinner } from 'react-bootstrap';

const RequireAuth = ({children}) => {
    const [user,loading] = useAuthState(auth);
    let location = useLocation();
    
    if(loading){
      return (
        <div className='width-100 d-flex justify-content-center mt-5'>
          <Spinner animation="border" variant="danger" />
        </div>
      );
    };
  
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
  }
  

export default RequireAuth;