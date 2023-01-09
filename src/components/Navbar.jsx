import React, { useState, useEffect, useCallback } from 'react';
import { navLinks } from '../data';
import { Link } from 'react-scroll';
import Button from './Button';
import { FaBars } from 'react-icons/fa';
import styles from '../style';

const Navbar = ({ toggleNav, handleToggleNav }) => {
  const [scrollNav, setScorllNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 700) {
      setScorllNav(true);
    } else {
      setScorllNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    return () => window.removeEventListener('scroll', changeNav);
  }, [changeNav]);

  return (
    <nav
      className={`${styles.flexCenter}  ${
        styles.paddingX
      } md:h-[90px] h-[80px]  ${
        scrollNav ? 'top-0 z-10 sticky bg-black-gradient box-shadow' : ''
      } `}
    >
      <div
        className={`flex w-full py-6 justify-between items-center md:h-[90px] h-[80px]${styles.boxWidth} 
        
      `}
      >
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
          className="text-gradient text-2xl font-poppins cursor-pointer tracking-[0.75px] no-underline   "
        >
          CorporationX
        </Link>

        <ul className="list-none md:flex hidden justify-end items-center flex-1 md:h-[90px]">
          {navLinks.map((navLink) => (
            <li
              className="no-underline font-poppins font-normal cursor-pointer text-[16px] text-white mr-10 "
              key={navLink.id}
            >
              <Link
                to={navLink.id}
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                className={scrollNav ? 'activeLink' : ''}
              >
                {navLink.title}
              </Link>
            </li>
          ))}
          <li>
            <Button text="Get in touch" section="form" responsive={true} />
          </li>
        </ul>
        <div className="md:hidden flex items-center justify-end flex-1 ">
          {!toggleNav && (
            <button onClick={handleToggleNav}>
              <FaBars className="text-[28px] cursor-pointer text-bgBlue" />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
