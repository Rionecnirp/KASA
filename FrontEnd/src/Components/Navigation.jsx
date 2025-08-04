import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoKasa from '../assets/LOGO_KASA.png';
import '../Styles/Components/Navigation.css'

const Navigation = () => {
    return (
        <header>
            <nav className='entete'>
                <NavLink to="/" className="logo-link">
                    <img src={LogoKasa} alt="Logo Kasa" className='LogoKasa' />
                </NavLink>
                <ul>
                    <NavLink to="/" >
                        <li>accueil</li>
                    </NavLink>
                    <NavLink to="/about" >
                        <li>à propos</li>
                    </NavLink>
                </ul>
            </nav>
        </header>
        
    );
};

export default Navigation;