import { motion } from 'framer-motion';
import { feedbacks } from '../data';
import FeedbackCard from './FeedbackCard';
import { staggerContainer } from '../utils/motion';

const Testimonials = () => {
  return (
    <section id="testimonials" className="md:py-[90px] py-6  ">
      <p className="text-gradient font-poppins text-[16px] uppercase tracking-[0.75px] mb-[20px]  ">
        Testimonials
      </p>
      <h2 className="text-white font-poppins font-semibold sm:text-[44px] text-[36px] leading-[50px] sm:mb-10 mb-5">
        Hear What our great customers say
      </h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-wrap sm:justify-start justify-center w-full feedback-container  z-[1]"
      >
        {feedbacks.map((feedback, index) => (
          <FeedbackCard key={feedback.id} {...feedback} index={index} />
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
