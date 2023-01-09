import React from 'react';
import quotes from '../assets/quotes.svg';
import { feedbacks } from '../data';
import FeedbackCard from './FeedbackCard';

const Testimonials = () => {
  return (
    <section id="testimonials" className="md:py-[90px] py-6 relative">
      <p className="text-gradient font-poppins text-[16px] uppercase tracking-[0.75px] mb-[20px] ">
        Testimonials
      </p>
      <h2 className="text-white font-poppins font-semibold sm:text-[44px] text-[36px] leading-[50px] w-full sm:mb-10 mb-5">
        Hear What our great customers say
      </h2>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
      <article className="flex flex-wrap sm:justify-start justify-center w-full feedback-container  z-[1]">
        {feedbacks.map((feedback) => (
          <FeedbackCard key={feedback.id} {...feedback} />
        ))}
      </article>
    </section>
  );
};

export default Testimonials;
