import React from 'react';
import img from '../../images/404.jpg'

const NotFound = () => {
    return (
        <div>
            <h3 className='text-danger text-center '>This is Error</h3>
            <img width={'100%'} src={img} alt="" />
            {/* https://i.ibb.co/pzS6bYw/404.jpg */}
        </div>
    );
};

export default NotFound;