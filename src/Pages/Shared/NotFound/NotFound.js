import React from 'react';
import found from '../../../img/notfound/found.jpg'

const NotFound = () => {
    return (
        <div style={{ background: `url(${found})` }}>
            <h2>404! Extremely Sorry</h2>
        </div>
    );
};

export default NotFound;