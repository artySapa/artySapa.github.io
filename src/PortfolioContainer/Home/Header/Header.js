import React from 'react';
import './Header.css';

export default function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-parent'>
                <img src={require ('../../../assets/Home/shape2.png')} alt='no internet connection'></img>
            </div>
        </div>
    );
}