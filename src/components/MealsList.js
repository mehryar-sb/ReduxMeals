import React from "react";

const MealsList = (props) => {
  return (
    <ul className="flex flex-col w-11/12 gap-5 px-3 py-2 mx-auto mt-5 mb-5 bg-white sm:gap-0 lg:w-8/12 rounded-2xl listAnimate ">
      {props.children}
    </ul>
  );
};

export default MealsList;
