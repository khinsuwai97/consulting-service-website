import React from 'react';
import styles from '../style';


const ServicesCard = (props) => {
  return (
    <div className="services-card flex flex-col justify-center px-8 py-5 cursor-pointer">
      <div
        className={`w-[50px] h-[50px] rounded-full ${styles.flexCenter} bg-dimBlue mb-2`}
      >
        <span className="text-[30px] text-secondary "> {props.icon}</span>
      </div>
      <div className="flex flex-col justify-center">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] my-2">
          {props.title}
        </h4>
        <p className="font-poppins text-[16px] text-dimWhite leading-[24px] ">
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default ServicesCard;
