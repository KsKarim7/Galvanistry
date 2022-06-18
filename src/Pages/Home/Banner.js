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
        <div class="hero min-h-screen" style={style} >
            < div class="hero-overlay bg-opacity-40" ></div >
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Welcome  to Galvanistry</h1>
                    <p class="mb-5 text-xl  bg-transparent"> We offer galvanometer to our clients. These precision engineered galvanometers provide effective detection of currents.</p>

                </div>
            </div>
        </div >
    );
};

export default Banner;