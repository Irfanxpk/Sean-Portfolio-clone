import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import Hero from '../../components/sections/Hero/Hero';
import About from '../../components/sections/About';
import Project from '../../components/sections/Project/Project';
import Footer from '../../components/sections/Footer/Footer';

const Home = () => {
    return (
        <PageLayout>
            <Hero />
            <Project />
            {/* <About /> */}
            <Footer />
        </PageLayout>
    );
};

export default Home;
