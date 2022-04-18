import React from 'react';
import me from '../../../images/about/me1.jpg'

const AboutMe = () => {
    return (
       <div className='text-center mt-3'>
           <img src={me} alt="" height={500} />
           <h3 className='mt-3 text-success' > Md Rabiul Islam</h3>
           <div className='mt-5'>
               <h3><span className='text-white p-3  rounded bg-success'>My Goal</span></h3>

               <p className='w-50 fs-4 mt-5 text-success mx-auto text-center'>
               From now on, within the next 3-6 months, you will be fully front-end developed.And I will work hard for a job or internship as a front-end developer in a good company.
               <br />
               
               And to develop itself as a complete Full Stack Develope at the end of 2022 years.
               </p>


           </div>
          
       </div>
    );
};

export default AboutMe;