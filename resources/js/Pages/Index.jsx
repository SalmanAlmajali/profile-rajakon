import React from 'react'
import Layout from '../Layouts/Layout'
import Hero from '../Components/section/hero/default';
import About from '../Components/section/about/default';
import AuroraBackground from '../Components/ui/aurora-background';
import Items from '../Components/section/items/default';
import Service from '../Components/section/service/default';
import Contact from '../Components/section/contact/default';
import Footer from '../Components/section/footer/default';

const Index = ({ heroes }) => {
    return (
        <Layout>
            <AuroraBackground>
                <Hero heroes={heroes} />
            </AuroraBackground>
            <About />
            <Items />
            <Service />
            <Contact />
            <Footer />
        </Layout >
    )
}

export default Index