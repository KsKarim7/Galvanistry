import React from 'react';

const Footer = () => {
    return (
        <div className='mt-16'>
            <footer className="footer p-10 bg-primary  text-base-content">
                <div className='text-white'>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Home Delivery</a>
                    <a className="link link-hover">Personal Mechanics</a>
                    <a className="link link-hover">Top notch products</a>

                </div>
                <div className='text-white'>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Location</a>
                </div>
                <div className='text-white'>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Return policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div className='text-white'>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-bold text-white mb-2">Enter your email address to get updates weekly</span>
                        </label>
                        <div className="relative ">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-neutral absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;