import React from 'react';

const Footer = () => { 
    const data = new Date().getFullYear()
    return (
        <div  className=' bg-dark text-center text-white p-5'> 
           <p> Idea ThemREX © {data} All Rights Reserved</p>
        </div>
    );
};

export default Footer; 