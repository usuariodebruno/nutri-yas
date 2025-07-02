import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ProblemSolving from '../components/ProblemSolving';
import Statistics from '../components/Statistics';
import CallToAction from '../components/CallToAction';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <ProblemSolving />
        <Statistics />
        <CallToAction />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
};

export default Home;