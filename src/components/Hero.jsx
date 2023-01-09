import React from 'react';
import HeroPhoto from '../assets/HeroPhoto.png';
import styles from '../style';
import Button from './Button';
import { ButtonLearn } from './Button';

const Hero = () => {
  return (
    <section
      id="home"
      className={`grid md:grid-cols-2 grid-cols-1 md:pt-22 md:pb-[90px] pb-3 pt-6`}
    >
      <div className="sm:px-16 px-6 md:mt-10">
        <h1 className="text-white font-poppins font-semibold sm:text-[62px] text-[44px] ss:leading-[80px] text-center ss:text-left leading-[65px]">
          Ready to take your{' '}
          <span className="text-gradient font-bold">business growth</span> to
          the next level?
        </h1>
        <p className="font-pppins font-normal text-[20px] leading-[30px] text-dimWhite ss:text-left text-center mt-5 max-w-[470px]">
          Outsourcing your business needs with our regional experts.We can
          ensure your business transitions will be in smooth and painless.
        </p>
        <div className="flex flex-1 mt-10 gap-5 justify-center ss:justify-start ">
          <Button text="Get in touch" section="form" responsive={false} />
          <ButtonLearn text="Learn More" section="services" />
        </div>
      </div>
      <div className={`${styles.flexCenter} flex-1 relative md:my-0 my-10`}>
        <img
          src={HeroPhoto}
          alt="people"
          className="w-[100%] z-[5] relative mt-[-50px] "
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
    </section>
  );
};

export default Hero;
