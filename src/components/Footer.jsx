import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import styles from '../style';
import { footerLinks, socialMedia } from '../data';
import { footerVariants } from '../utils/motion';

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={` md:py-[90px] py-14 `}
    >
      <div className="w-full mb-8 flex md:flex-row flex-col justify-between items-start ">
        <div className="flex md:flex-row flex-col mr-28 md:gap-[100px] gap-[70px] ">
          <div className="flex flex-col justify-start items-start ">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              className="text-gradient text-2xl font-poppins cursor-pointer tracking-[0.75px] no-underline mr-10 "
            >
              CorporationX
            </Link>
            <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
              Start scaling your business to the next level
            </p>
          </div>

          <div>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              Contact us
            </h4>
            <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-bgBlue max-w[350px] my-4">
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <a
              className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-bgBlue my-4 block"
              href="#"
            >
              415-201-6370
            </a>
            <a
              className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-bgBlue my-4 block"
              href="#"
            >
              hello@corporationx.com
            </a>
          </div>
        </div>
        <div className=" w-full flex flex-row justify-between items-start md:mt-0 mt-10 gap-8 ">
          {footerLinks.map((footerLink) => {
            return (
              <div
                key={footerLink.title}
                className=" ss:my-0 my-4 flex flex-col justify-center "
              >
                <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                  {footerLink.title}
                </h4>
                <ul className="list-none mt-4">
                  {footerLink.links.map((link, index) => {
                    return (
                      <li
                        key={link.name}
                        className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-bgBlue cursor-pointer ${
                          index !== footerLink.links.length - 1
                            ? 'mb-4'
                            : 'mb-0'
                        }`}
                      >
                        <a href="#">{link.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6  border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal  text-center text-[18px] leading-[27px] text-white">
          Copyright &copy; {new Date().getFullYear()} CoporationX. All Rights
          Reserved.
        </p>

        <div className="flex flew-row md:mt-0 mt-6">
          {socialMedia.map((media, index) => {
            return (
              <a
                key={media.id}
                href={media.link}
                className={`text-[25px] text-white 
                ${index !== media.length - 1 ? 'mr-6' : 'mr-0'}`}
              >
                {media.icon}
              </a>
            );
          })}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
