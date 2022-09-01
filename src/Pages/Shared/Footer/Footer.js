import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const handleSubscribe = event => {
        event.preventDefault();
        event.target.reset();
    }
    return (
        <footer className='footer-container mt-5'>
            <div className='row'>
                <form onSubmit={handleSubscribe} className='col-12 col-md-6 col-lg-6 subscribe-form mt-3'>
                    <input type="email" name='email' placeholder='Enter Your Email' />
                    <input type="submit" value="Subscribe" />
                </form>
                <div className='col-12 col-md-6 col-lg-6 mt-3'>
                    <div><Link className='footer-pages' to='/login'>Login</Link></div>
                    <div><Link className='footer-pages' to='/signup'>Signup</Link></div>
                </div>
            </div>
            <p className='text-white mt-3 pb-3'>&copy; Copyright: Car Inventory {new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;