import React from 'react';
import Girl from '../assets/Girl.png';
import styles from '../style';
import { operations } from '../data';

const Operations = () => {
  return (
    <section id="operations" className="md:py-[90px] py-14">
      <p className="text-gradient font-poppins text-[16px] uppercase tracking-[0.75px] mb-[20px] ">
        Our Operations
      </p>
      <h2 className="text-white font-poppins font-semibold sm:text-[44px] text-[36px] leading-[50px] w-full mb-10">
        A simple yet powerful and efficient Operation
      </h2>
      <div className="flex flex-1 md:flex-row flex-col-reverse md:mr-10 mr-0">
        <div className="relative flex  justify-center items-center  ">
          <img
            src={Girl}
            className="w-[100%] h-[100%] rounded-[20px] z-5 flex-1"
            alt="CheerfulGirl"
          />
          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
          <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
        </div>
        <div className="md:ml-10">
          {operations.map((operation, index) => {
            return (
              <div
                key={operation.id}
                className={`flex flex-row p-6 rounded-[20px] cursor-pointer ${
                  index !== operation.length - 1 ? 'mb-6' : 'mb-0'
                } operation-card`}
              >
                <div
                  className={`w-[50px] h-[50px] rounded-full ${styles.flexCenter} bg-dimBlue mb-2`}
                >
                  <p className="w-[35%] h-[50%] font-poppins text-secondary">
                    {operation.number}
                  </p>
                </div>
                <div className="flex-1 flex flex-col ml-3">
                  <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
                    {operation.title}
                  </h4>
                  <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
                    {operation.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Operations;
