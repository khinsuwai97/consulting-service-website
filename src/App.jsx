import React, { useState } from 'react';
import Navbar from './components/Navbar';
import styles from './style';
import SideBar from './components/SideBar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Operations from './components/Operations';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const handleToggleNav = () => {
    setToggleNav((prevToggleNav) => !prevToggleNav);
  };

  const closeNav = () => {
    setToggleNav(false);
  };

  return (
    <div className=" w-full bg-primary ">
      <Navbar toggleNav={toggleNav} handleToggleNav={handleToggleNav} />
      <SideBar
        closeNav={closeNav}
        handleToggleNav={handleToggleNav}
        toggleNav={toggleNav}
      />

      <div className={`bg-primary ${styles.flexStart} overflow-hidden`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div
        className={`bg-primary ${styles.paddingX} ${styles.flexStart} overflow-hidden`}
      >
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Services />
          <Operations />
          <Testimonials />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
