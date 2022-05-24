import React from 'react';
import man from '../../img/sale/man.jpg'
import friday from '../../img/sale/friday.jpg'

const Sale = () => {
    const imgStyle = {
        // width: '25%',
        height: '400px',
        width: '500px',

    }
    const imggStyle = {
        width: '450px',
        height: '400px',

    }
    return (
        <div>
            <div class="hero bg-amber-50 py-20   ">
                <div class=" flex justify-between flex-col lg:flex-row">
                    <img src={friday} className="rounded-full shadow-xl" alt='' style={imgStyle} />
                    <div className='text-center my-auto'>
                        <h1 class="text-5xl mx-8 text-neutral text-center font-bold">Black Friday Deals Starts <br /> from next week </h1>
                        <p class="py-6 text-amber-600 text-3xl">Grab your products until we go <br /> OUT OF STOCK... <span>SO<br />  HURRY UPP!!</span> </p>

                    </div>
                    <img src={man} className="rounded-xl shadow-xl" alt='' style={imggStyle} />
                </div>
            </div>
        </div>
    );
};

export default Sale;