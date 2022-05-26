import React from 'react';
import found from '../../../img/notfound/found.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notFound' style={{ background: `url(${found})` }}>
            <h2>404! Extremely Sorry</h2>
        </div>
    );
};

export default NotFound;