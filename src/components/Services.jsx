import { motion } from 'framer-motion';
import { services } from '../data';
import { layout } from '../style';
import Button from './Button';
import styles from '../style';
import ServicesCard from './ServicesCard';
import { staggerContainer, fadeIn } from '../utils/motion';
const Services = () => {
  return (
    <section id="services" className="md:py-[90px] py-14 ">
      <p className="text-gradient font-poppins text-[16px] uppercase tracking-[0.75px] mb-[20px] ">
        Our Services
      </p>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`grid md:grid-cols-2 grid-cols-1 gap-[96px]  `}
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className={`${layout.sectionInfo}`}
        >
          <h2 className="text-white font-poppins font-semibold sm:text-[44px] text-[36px] leading-[50px] w-full ">
            High-impact business services
          </h2>
          <p className={`${styles.paragraph} max-w-[460px] mt-5`}>
            Our corporation provides a wide range of services. Our team also
            expertises in a specific market sector and business solutions
            including Project Management, Compliance,Human Resources and Quality
            Assurance.
          </p>
          <Button section="form" text="Get in touch" top="mt-10" />
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="grid sm:grid-cols-2 grid-cols-1 gap-7 "
        >
          {services.map((service) => (
            <ServicesCard key={service.id} {...service} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
