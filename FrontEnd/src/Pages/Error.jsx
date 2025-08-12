import { NavLink } from 'react-router-dom';
import Footer from '../Components/Footer/Footer'
import '../Style/Error.css'
import Navigation from '../Components/Navigation/Navigation';

const Error = () => {
    return (
        <>
            <Navigation />
            <main className='Error'>
            <h1>404</h1>
            <h2>Oups ! La page que vous demandez n'existe pas.</h2>
            <NavLink to="/">
                <span>
                    Retournez sur la page d’accueil
                </span>
            </NavLink>
            </main>
            <Footer />
        </>
        
    );
};

export default Error;