import React from 'react';
import CustomerReview from '../../Reviews/CustomerReview/CustomerReview';
import Bannar from '../Banner/Bannar';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Bannar></Bannar>
             <Services></Services>
             <CustomerReview></CustomerReview>
             <Footer></Footer>
            
            
        </>
    );
};

export default Home;