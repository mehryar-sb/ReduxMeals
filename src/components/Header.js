import React, { Fragment } from "react";
import Svg from "../helper/Svg";
import Button from "./Button";
import CardDetails from "./CardDetails";

const Header = (props) => {
  return (
    <Fragment>
      <div className="w-full h-[100px] sm:px-5 px-2  text-white bg-orange-900 fixed ">
        <div className="flex items-center justify-between w-full h-full gap-5">
          <h1>ReactMeals</h1>
          <Button onShowModal={props.onShowModal}></Button>
        </div>
      </div>

      <div className="absolute top-0 background ">
        <CardDetails></CardDetails>
        <Svg></Svg>
      </div>
    </Fragment>
  );
};

export default Header;
