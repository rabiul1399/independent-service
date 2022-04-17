import React from 'react';
import CustomerReview from '../../Reviews/CustomerReview/CustomerReview';
import Details from '../../Reviews/Detailes/Details';
import Bannar from '../Banner/Bannar';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Bannar></Bannar>
             <Services></Services>
             <CustomerReview></CustomerReview>
             <Details></Details>
             <Footer></Footer>
            
            
        </>
    );
};

export default Home;