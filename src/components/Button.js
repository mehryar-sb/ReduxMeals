import React from "react";
import IconeSvg from "../helper/IconeSvg";
import { useSelector } from "react-redux";

const Button = (props) => {
  const total = useSelector((state) => state.counter.total);
  return (
    <button
      onClick={props.onShowModal}
      className="flex items-center justify-center w-8/12 gap-2 py-3 text-base md:w-5/12 sm:w-7/12 lg:w-[300px] sm:flex-row sm:text-xl button rounded-3xl">
      <span>
        <IconeSvg></IconeSvg>
      </span>
      <span>
        <h3>Your Cart</h3>
      </span>
      <span className="w-10 py-[2px] bg-orange-900 rounded-full">
        <h3>{total}</h3>
      </span>
    </button>
  );
};

export default Button;
