import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoKasa from '../../assets/LOGO_KASA.png';
import './Navigation.css'

const Navigation = () => {
    return (
        <header>
            <nav className='entete'>
                <NavLink to="/" className="logo-link">
                    <img src={LogoKasa} alt="Logo Kasa" className='LogoKasa' />
                </NavLink>
                <ul>
                        <li>
                            <NavLink to="/" className={({ isActive }) => isActive ? 'liActif' : ''}>
                                Accueil
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/about" className={({ isActive }) => isActive ? 'liActif' : ''}>
                                A propos
                            </NavLink>
                        </li>
                </ul>
            </nav>
        </header>
        
    );
};

export default Navigation;