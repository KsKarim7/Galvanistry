import React from 'react';
import bg from '../../img/galva.jpg'

const Banner = () => {
    const style = {
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // width: '100vw',
        // height: '100vh'
    };
    return (
        <div className="hero min-h-screen" style={style} >
            < div className="hero-overlay bg-opacity-40" ></div >
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-4xl font-bold">Welcome  to Galvanistry</h1>
                    <p className="mb-5 text-xl  bg-transparent"> We offer galvanometer to our clients. Our precision engineered galvanometers provide effective detection of currents.</p>

                </div>
            </div>
        </div >
    );
};

export default Banner;