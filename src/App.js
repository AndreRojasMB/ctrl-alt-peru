import React from 'react';
import './App.css';

// Importar todos los componentes
import Header from './components/header';
import HomeHero from './components/home-hero';
import HomeCards from './components/home-cards';
import HomeBanner from './components/home-banner';
import HomeSteps from './components/home-steps';
import HomeReels from './components/home-reels';
import HomeDescription from './components/home-description';
import HomeForm from './components/home-form';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HomeHero />
      <HomeCards />
      <HomeBanner />
      <HomeSteps />
      <HomeReels />
      <HomeDescription />
      <HomeForm />
      <Footer />
    </div>
  );
}

export default App;