import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Diplomas from './components/Diplomas';
import RegistrationForm from './components/RegistrationForm';

function RPApp() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diplomas" element={<Diplomas />} />
          <Route path="/register" element={<RegistrationForm />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default RPApp;
