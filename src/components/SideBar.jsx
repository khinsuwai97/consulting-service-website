import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { navLinks } from '../data';
import { Link } from 'react-scroll';
import { ButtonMobile } from './Button';
import styles from '../style';

const SideBar = ({ toggleNav, handleToggleNav, closeNav }) => {
  return (
    <aside
      className={`${toggleNav ? 'opacity-1' : 'opacity-0'}
    ${toggleNav ? 'translate-y-0' : 'translate-y-[-100%] '} ${
        toggleNav ? 'visible' : 'invisible'
      } transitiona-all ease-in duration-300 fixed flex justify-center items-center
 backdrop-blur-sm bg-black-gradient w-full h-full z-50 top-0 left-0 `}
    >
      <div>
        <button onClick={handleToggleNav}>
          <FaTimes className="text-[28px] cursor-pointer text-bgBlue absolute top-[13px] right-[24px] z-50" />
        </button>
        <ul className="flex flex-col items-center justify-center ">
          {navLinks.map((navLink) => (
            <li
              className="no-underline font-poppins font-normal cursor-pointer text-[24px] text-white mb-10 transition ease-in-out  hover:text-bgBlue"
              key={navLink.id}
            >
              <Link
                to={navLink.id}
                onClick={closeNav}
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
              >
                {navLink.title}
              </Link>
            </li>
          ))}
          <li>
            <ButtonMobile
              text="Get in touch"
              section="form"
              closeNav={closeNav}
            />
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
