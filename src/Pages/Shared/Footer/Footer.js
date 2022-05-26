import React from 'react';

const Footer = () => {
    return (
        <div className='mt-16'>
            <footer class="footer p-10 bg-primary  text-base-content">
                <div className='text-white'>
                    <span class="footer-title">Services</span>
                    <a class="link link-hover">Home Delivery</a>
                    <a class="link link-hover">Personal Mechanics</a>
                    <a class="link link-hover">Top notch products</a>

                </div>
                <div className='text-white'>
                    <span class="footer-title">Company</span>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Location</a>
                </div>
                <div className='text-white'>
                    <span class="footer-title">Legal</span>
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Return policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </div>
                <div className='text-white'>
                    <span class="footer-title">Newsletter</span>
                    <div class="form-control w-80">
                        <label class="label">
                            <span class="label-text text-bold text-white mb-2">Enter your email address to get updates weekly</span>
                        </label>
                        <div class="relative ">
                            <input type="text" placeholder="username@site.com" class="input input-bordered w-full pr-16" />
                            <button class="btn btn-neutral absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;