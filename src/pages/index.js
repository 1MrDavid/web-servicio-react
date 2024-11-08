import React from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import SectionOne from '../components/SectionOne';
import SectionTwo from '../components/SectionTwo';
import SectionThree from '../components/SectionThree';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="font-serif text-gray-800">
      <Header />
      <main>
        <Carousel  />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </main>
      <Footer />
    </div>
  );
}