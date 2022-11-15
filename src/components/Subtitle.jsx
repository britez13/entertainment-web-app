import React from "react";

const Subtitle = ({ text }) => {
  return (
    <h1
      className='text-white font-light text-xl tracking-[-0.31px] 
      md:text-[32px] md:tracking-[-0.5px]'
    >
      {text}
    </h1>
  );
};

export default Subtitle;
