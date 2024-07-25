import React from 'react';
import Header from './components/header.jsx';
import HeroSection from './components/herosection.jsx';
import Features from './components/feature.jsx';
import Footer from './components/footer.jsx';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Header />
            <HeroSection />
            <Features />
            <Footer />
        </div>
    );
};

export default App;
