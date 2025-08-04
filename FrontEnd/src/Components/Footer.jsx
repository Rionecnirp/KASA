import React from 'react';
import LogoKasaWhite from '../assets/LOGO_white.png'
import '../Styles/Components/Footer.css'


const Footer = () => {
    return (
        <footer>
            <img src={LogoKasaWhite} alt="Logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;