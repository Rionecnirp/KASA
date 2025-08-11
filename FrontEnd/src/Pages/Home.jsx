import React from 'react';

import Navigation from '../Components/Navigation/Navigation';
import Footer from '../Components/Footer/Footer';
import Card from '../Components/Card/Card';
import Cards from '../Components/Cards/Cards';
import Banner from '../Components/Banner/Banner';

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