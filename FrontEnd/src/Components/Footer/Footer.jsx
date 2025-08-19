import React from 'react';
import LogoKasaWhite from '../../assets/LOGO_white.png'
import './Footer.css'

/** Ce composant retourne :
 * Un Footer. Avec une image et un paragraphe.
 */

const Footer = () => {
    return (
        <footer>
            <img src={LogoKasaWhite} alt="Logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;