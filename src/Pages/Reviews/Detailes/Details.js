import React from 'react';
import aboutMe from '../../../images/about/aboutMe.jpg';

const Details = () => {
    return (
        <div id='aboutMe' className='container my-5'>
            <h1 className='text-center text-success mb-5'>About Me</h1>
            <div className=' row  row-cols-md-1 row-cols-lg-2'>
                <div>
                    <img width={'500px'} height={'500px'} src={aboutMe} alt="" />
                </div>

                <div className='bg-light bg-gradient ps-4'>
                    <div className='mt-5'>
                        <h2 className='fw-bolder py-2 mb-4'>Read My Story</h2>
                        <h5 className='mb-3  '>“I am the creator of a Training Programs, personal coach and a writer. ”</h5>
                        <p className='fw-normal'>Being fit and living healthy is what I know and love. Fitness has always been a part of my life. I grew up in a fit family—my dad ran marathons, we had a home gym, and my parents always had gym memberships.</p>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Details;