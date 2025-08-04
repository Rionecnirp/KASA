import { NavLink } from 'react-router-dom';
import Footer from '../Components/Footer'

const Error = () => {
    return (
        <main>
            <h1>404</h1>
            <p>Oups ! La page que vous demandez n'existe pas.</p>
            <NavLink to="/">Retournez sur la page d’accueil</NavLink>
            <Footer />
        </main>
        
    );
};

export default Error;