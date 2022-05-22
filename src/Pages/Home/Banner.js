import React from 'react';
import bg from '../../img/galva.jpg'

const Banner = () => {
    const style = {
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        // width: '100vw',
        // height: '100vh'
    };
    return (
        <div class="hero min-h-screen" style={style} >
            < div class="hero-overlay bg-opacity-60" ></div >
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Welcome  to Galvanistry</h1>
                    <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-neutral">Get Started</button>
                </div>
            </div>
        </div >
    );
};

export default Banner;