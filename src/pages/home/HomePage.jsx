import React from 'react';
import LoginForm from '../../components/forms/LoginForm';
import Footer from '../../components/layout/Footer';
import Logo from '../../components/layout/Logo';

/** Imort styles */
import './home.scss';

const Home = () => (
  <div className="home">
    <div className="wrapper">
      <header>
        <Logo />
      </header>
      <main className="page">
        <LoginForm />
      </main>
      <Footer />
    </div>
  </div>
);

export default Home;
