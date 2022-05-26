import React from 'react';

const Portfolio = () => {
    // const style ={

    // }
    return (
        <div className='grid justify-items-center '>
            <div>
                <h2 className='text-5xl my-8 font-semibold'>My Portfolio</h2>
                <p className='text-4xl my-3'><span className='text-primary'>Name</span> : <span className='uppercase'>Khaled Saifullah Karim</span></p>
                <p className='text-3xl my-3'><span className='text-primary'>Email Address</span> : <span className=''>kskarim177@gmail.com</span></p>
                <p className='text-3xl my-3'><span className='text-primary'>Education Qualification</span> : <span className=''>University (fresher)</span></p>
                <p className='text-3xl mt-3 '><span className='text-primary'>Skill I have as a web developer</span> :
                    <li className='mt-2 text-2xl'>HTML and CSS</li>
                    <li className='mt-2 text-2xl'>Responsive web layout ability (User interface)</li>
                    <li className='mt-2 text-2xl'>Web servers and how they function </li>
                    <li className='mt-2 text-2xl'>GIT (Code Versioning)</li>
                    <li className='mt-2 text-2xl'>Analytical skills</li>
                    <li className='mt-2 text-2xl'>Debugging skills</li>
                    <li className='mt-2 text-2xl'>JavaScript skills</li>
                    <li className='mt-2 text-2xl'>Libraries and frameworks</li>
                    <li className='mt-2 text-2xl'>Basic Back end and Databases</li>
                    <li className='mt-2 text-2xl'> Working with Hosting (Publishing web site)</li>
                </p>

            </div>
        </div>
    );
};

export default Portfolio;