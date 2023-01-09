import React from 'react';
import styles from '../style';
import Button from './Button';
const CTA = () => {
  return (
    <section id="form" className="md:py-[90px] py-14">
      <div className="w-full bg-black-gradient-2 box-shadow md:flex-row flex-col flex justify-between rounded-[30px] py-[40px] px-[65px]  ">
        <div className="flex flex-col flex-1">
          <h2 className="text-white font-poppins font-semibold sm:text-[44px] text-[36px] md:leading-[55px] leading-[50px] w-full sm:mb-5 ">
            Contact us today to get <br className="md:block hidden" /> a free
            consultation!
          </h2>
          <p className={`${styles.paragraph} max-w-[500px] mt-5 md:mb-0 mb-5`}>
            Outsourcing your business needs with our regional experts to make
            business transitions smooth and painless.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4 sm:gap-1 ">
          <div>
            <input
              className="py-[10px] px-[30px] text-[16px] rounded-[9px] outline-none mr-1 sm:w-[100%] w-[100%] "
              type="email"
              placeholder="me@example.com"
            />
          </div>
          <div>
            <button className=" sm:w-[50%] py-[10px] w-[100%] text-[16px] rounded-[9px] outline-none font-poppins  bg-blue-gradient  text-primary font-medium cursor-pointer btn-get">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
