import React from 'react';
import AboutMe from '../../Reviews/AboutMe/AboutMe';
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
             <AboutMe></AboutMe>
             <Footer></Footer>
            
            
        </>
    );
};

export default Home;