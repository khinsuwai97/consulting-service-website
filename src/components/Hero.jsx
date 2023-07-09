import { motion } from 'framer-motion';
import HeroPhoto from '../assets/HeroPhoto.png';
import styles from '../style';
import Button, { ButtonLearn } from './Button';
import { staggerContainer, fadeIn } from '../utils/motion';
const Hero = () => {
  return (
    <section
      id="home"
      className={`grid md:grid-cols-2 grid-cols-1 md:pt-22 md:pb-[90px] pb-3 pt-6`}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="sm:px-16 px-6 md:mt-10 max-w-[1300px]"
      >
        <motion.h1
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="text-white font-poppins font-semibold sm:text-[62px] text-[44px] ss:leading-[80px] text-center ss:text-left leading-[65px]"
        >
          Ready to take your{' '}
          <span className="text-gradient font-bold">business growth</span> to
          the next level?
        </motion.h1>
        <motion.p
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="font-pppins font-normal text-[20px] leading-[30px] text-dimWhite ss:text-left text-center mt-5 max-w-[470px]"
        >
          Outsourcing your business needs with our regional experts.We can
          ensure your business transitions will be in smooth and painless.
        </motion.p>
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex flex-1 mt-10 gap-5 justify-center ss:justify-start "
        >
          <Button text="Get in touch" section="form" responsive={false} />
          <ButtonLearn text="Learn More" section="services" />
        </motion.div>
      </motion.div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.flexCenter} flex-1 relative  md:my-0 my-10`}
      >
        <motion.img
          variants={fadeIn('left', 'tween', 0.2, 1)}
          src={HeroPhoto}
          alt="people"
          className="w-[100%] z-[5] relative mt-[-50px] "
        />
      </motion.div>
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </section>
  );
};

export default Hero;
