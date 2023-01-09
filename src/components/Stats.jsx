import React from 'react';
import { stats } from '../data';
import styles from '../style';

const Stats = () => {
  return (
    <section
      className={`grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-[15px] sm:mb-20 mb-6`}
    >
      {stats.map((stat) => {
        return (
          <div
            className="flex flex-row items-center justify-center text-white"
            key={stat.id}
          >
            <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] ">
              {stat.value}
            </h4>
            <p className="font-poppins font-normal text-gradient xs:text-[20px] text-[14px] uppercase ">
              {stat.title}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default Stats;
