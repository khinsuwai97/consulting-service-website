import { motion } from 'framer-motion';
import { stats } from '../data';
import { staggerContainer, fadeIn } from '../utils/motion';

const Stats = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-[15px] sm:mb-20 mb-6`}
    >
      {stats.map((stat) => {
        return (
          <motion.div
            variants={fadeIn('left', 'tween', 0.2, 1)}
            className="flex flex-row items-center justify-center text-white"
            key={stat.id}
          >
            <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] ">
              {stat.value}
            </h4>

            <p className="font-poppins font-normal text-gradient xs:text-[20px] text-[14px] uppercase ">
              {stat.title}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Stats;
