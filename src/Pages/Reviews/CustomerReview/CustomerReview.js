import React from 'react';
import './CustomerReview.css';

const CustomerReview = () => {
    return (
        <div className='customerReviews '>
           <div className='reviews w-25 ms-auto'>
           <h1 className='text-center text-info'>What Clients Say</h1>
            <p className='text-white pt-5'>

                I have been working with Alex for almost a year now, and I couldn’t be happier with the results and experience. I have learnt so much from Alex, he is willing to share his expert knowledge and answer any questions you come up with
            </p>
            <h2 className='text-info text'>J.Abrams</h2>
           </div>

            {/* <p>
            This programs will change your life! I have the Muscle Building, Bikini Body and this one is my favorite. Alex puts so much detail into these programs to give you exactly what you need!

M. Reynolds
Alex encourages you and pushes you to achieve your potential. I’ve seen great results over the past few months! His tips on nutrition are excellent and his dedication is clear.

A. Fraser
Alex Stone knows his stuff and is passionate about helping you to achieve your own health and fitness goals. The workouts are always different and I look forward to each session. Highly recommended!

L. Wilson
            </p> */}

        </div>
    );
};

export default CustomerReview;