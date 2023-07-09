import { Link } from 'react-scroll';

export const Button = (props) => {
  return (
    <Link
      to={props.section}
      spy={true}
      smooth={true}
      offset={-90}
      duration={500}
      className={`px-[20px] font-poppins py-[12px] bg-blue-gradient text-[16px] text-primary font-medium outline-none rounded-[9px] cursor-pointer ${
        props.responsive ? 'md:flex hidden' : ''
      }   whitespace-nowrap ${props.top} btn-get`}
    >
      {props.text}
    </Link>
  );
};
export default Button;

export const ButtonLearn = (props) => {
  return (
    <Link
      to={props.section}
      spy={true}
      smooth={true}
      offset={-90}
      duration={500}
      className="text-gradient px-[20px] py-[10px] font-poppins text-[16px] border-solid border-2 border-bgBlue font-medium rounded-[9px] cursor-pointer whitespace-nowrap"
    >
      {props.text} &darr;
    </Link>
  );
};

export const ButtonMobile = (props) => {
  return (
    <button className="px-[20px] py-[10px] font-poppins bg-blue-gradient text-[16px] text-primary outline-none font-medium rounded-[9px] cursor-pointer whitespace-nowrap btn-get">
      <Link
        to={props.section}
        spy={true}
        smooth={true}
        offset={-90}
        duration={500}
        exact="true"
        onClick={props.closeNav}
      >
        {props.text}
      </Link>
    </button>
  );
};
