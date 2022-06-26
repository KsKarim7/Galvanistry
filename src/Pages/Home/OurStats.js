import React from 'react';
import me from '../../img/me.png'

const OurStats = () => {
    return (
        <div className='mx-auto my-28 drop-shadow-2xl font-mono'>
            <p className='text-4xl mb-16 font-bold text-primary text-center'>A Glance at our Stats</p>
            <div className="stats shadow bg-white-400 container  text-center h-100" style={{ height: '200px' }}>

                <div className="stat">
                    <div className="stat-figure text-neutral">
                        <div className="avatar online ">
                            <div className="w-16 bg-primary rounded-full">
                                <img src={me} />
                            </div>
                        </div>
                    </div>
                    <div className="stat-title text-2xl text-neutral">Total Likes</div>
                    <div className="stat-value text-secondary">25.6K</div>
                    <div className="stat-desc text-xl text-secondary">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-neutral ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title text-2xl text-neutral">Products Sold this <br /> month</div>
                    <div className="stat-value text-secondary">1.6M</div>
                    <div className="stat-desc text-xl text-secondary">Increase of 7% than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-title text-2xl text-neutral">Number of our <br />  customers</div>
                    <div className="stat-value text-secondary">4,200</div>
                    <div className="stat-desc text-xl text-secondary">Thanks to all of you <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">

                    </div>
                    <div className="stat-value  text-primary">86%</div>
                    <div className="stat-title text-2xl text-neutral">Products Sold Out of our
                        <br /> last Production</div>
                    <div className="stat-desc text-secondary text-2xl ">14% Products Remaining</div>
                </div>

            </div>
        </div>
    );
};

export default OurStats;