import Navigation from '../Components/Navigation/Navigation';
import Footer from '../Components/Footer/Footer';
import Cards from '../Components/Cards/Cards';
import Banner from '../Components/Banner/Banner';

/* Page d'Accueil. Dans cette dernière il y a :
* Le composant "Navigation", qui sert de Header.
* Un main avec le composant "Banner" et le composant "Cards".
* Le composant "Footer", qui sert de Footer
* 
*/

const Home = () => {

    return (
        <>
            <Navigation />
            <main>
                <Banner />
                <Cards />
            </main>
            <Footer />
        </>
    );
};

export default Home;