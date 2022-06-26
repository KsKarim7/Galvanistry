import React from 'react';
import man from '../../img/sale/men.png'
import friday from '../../img/sale/black.png'

const Sale = () => {
    const imgStyle = {
        // width: '25%',
        height: '350px',
        width: '500px',

    }
    const imggStyle = {
        width: '400px',
        height: '350px',

    }
    return (
        <div>
            <div className="hero bg-rose-50 py-20   ">
                <div className=" flex justify-between flex-col lg:flex-row">
                    <img src={friday} className="rounded-full drop-shadow-2xl pl-2" alt='' style={imgStyle} />
                    <div className='text-center my-auto'>
                        <h1 className="text-5xl mx-8 text-neutral text-center font-bold">Black Friday Deals Starts <br /> from next week </h1>
                        <p className="py-6 text-2xl text-amber-700 ">Grab your products until we go <br /> OUT OF STOCK... <span>SO<br />  HURRY UPP!!</span> </p>

                    </div>
                    <img src={man} className="rounded-xl drop-shadow-2xl pr-2" alt='' style={imggStyle} />
                </div>
            </div>

        </div>
    );
};

export default Sale;