import React from 'react';
import { services } from '../data';
import styles from '../style';
import { layout } from '../style';
import Button from './Button';
import ServicesCard from './ServicesCard';

const Services = () => {
  return (
    <section id="services" className="md:py-[90px] py-14 ">
      <p className="text-gradient font-poppins text-[16px] uppercase tracking-[0.75px] mb-[20px] ">
        Our Services
      </p>
      <div className={`grid md:grid-cols-2 grid-cols-1 gap-[96px]  `}>
        <div className={`${layout.sectionInfo}`}>
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
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-7 ">
          {services.map((service) => (
            <ServicesCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
