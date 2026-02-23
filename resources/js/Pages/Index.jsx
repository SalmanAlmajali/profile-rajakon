import React from 'react';
import { Head } from '@inertiajs/react';

import Layout from '../Layouts/Layout';
import AuroraBackground from '../Components/ui/aurora-background';
import Hero from '../Components/section/hero/default';
import About from '../Components/section/about/default';
import Items from '../Components/section/items/default';
import Service from '../Components/section/service/default';
import Clients from '../Components/section/clients/default';
import Gallery from '../Components/section/gallery/default';
import Contact from '../Components/section/contact/default';
import Footer from '../Components/section/footer/default';

const Index = ({ galleries = [], partners = [] }) => {
  return (
    <Layout>
      <Head title="Rajakon - Personal Profile" />

      <AuroraBackground>
        <Hero />
      </AuroraBackground>

      <main className="relative z-10">
        <About />
        <Items />
        <div id="partners">
          <Clients partners={partners} />
        </div>
        <Service />
        <div id="gallery">
          <Gallery galleries={galleries} />
        </div>
        <Contact />
      </main>

      <Footer />
    </Layout>
  );
};

export default Index;