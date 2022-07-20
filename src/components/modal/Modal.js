import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import CSSTransition from "react-transition-group/CSSTransition";
import { counterActions } from "../store/counter";

const Overaly = (props) => {
  const sentMeals = useSelector((state) => state.counter.cartItems);
  const orderMessage = useSelector((state) => state.counter.orderMessage);
  const dispatch = useDispatch();

  const clearHandler = function () {
    dispatch(counterActions.clearCart());
    dispatch(counterActions.setOrderMessage(true));
  };

  const increaseHandler = function (e) {
    e.preventDefault();
    const uniqueButtonIncrease = e.target
      .closest(".button-m")
      .className.split(" ");

    props.meals.forEach((item) => {
      if (uniqueButtonIncrease.find((item2) => item2 === item.id)) {
        dispatch(
          counterActions.increaseCart({ item: item, price: item.price }),
        );
      }
    });
  };

  const decreaseHandler = function (e) {
    e.preventDefault();
    const uniqueButtondecrease = e.target
      .closest(".button-m2")
      .className.split(" ");

    props.meals.forEach((item) => {
      if (uniqueButtondecrease.find((item2) => item2 === item.id)) {
        dispatch(
          counterActions.decreaseCart({ item: item, price: item.price }),
        );
      }
    });
  };

  return (
    <div className="fixed overflow-y-scroll z-20 h-[400px] flex flex-col  w-11/12 xl:w-5/12 gap-5 px-3 py-2 -translate-x-1/2 bg-white left-1/2 rounded-xl top-28 justify-between ">
      {orderMessage && <h3>Your order is ready !</h3>}
      <ul className="flex flex-col gap-2">
        {sentMeals.map((meal) => {
          return (
            <li
              key={meal.id}
              className="flex flex-col gap-2 py-2 border-b border-gray-300">
              <div className="flex items-center w-full gap-2 ">
                <h4>{meal.name}</h4>
                <h4>x{meal.count}</h4>
              </div>
              <div className="flex items-center justify-between w-full ">
                <h3>Total Amount</h3>
                <h3>${meal.price.toFixed(2)}</h3>
              </div>
              <form className="flex self-end justify-end w-full gap-1">
                <button
                  onClick={decreaseHandler}
                  className={`w-11/12 sm:w-2/12 md:w-[80px]  border button-m2 border-gray-400 rounded-xl ${meal.id}`}>
                  <h4>-</h4>
                </button>
                <button
                  onClick={increaseHandler}
                  className={` w-11/12 sm:w-2/12 md:w-[80px]  border button-m border-gray-400 rounded-xl ${meal.id}`}>
                  <h4>+</h4>
                </button>
              </form>
            </li>
          );
        })}
      </ul>
      <div className="flex self-end justify-end w-full gap-4 place-self-end ">
        <button
          onClick={props.onCloseModal}
          className="w-4/12 md:w-2/12 py-[6px] border border-orange-900 text-orange-800  rounded-3xl">
          <h4>Close</h4>
        </button>
        <button
          onClick={clearHandler}
          className="w-4/12 md:w-2/12 py-[6px] text-white bg-orange-900 rounded-3xl">
          <h4>Order</h4>
        </button>
      </div>
    </div>
  );
};

const BackDrop = (props) => {
  return (
    <div
      onClick={props.onCloseModal}
      className="fixed top-0 z-10 w-full h-[100vh] bg-black opacity-60"></div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      <CSSTransition
        in={props.isShowModal}
        timeout={1000}
        unmountOnExit
        classNames="modal-animate">
        {
          <Overaly
            meals={props.meals}
            onCloseModal={props.onCloseModal}></Overaly>
        }
      </CSSTransition>
      <CSSTransition
        in={props.isShowModal}
        timeout={1000}
        unmountOnExit
        classNames="backdrop-animate">
        {<BackDrop onCloseModal={props.onCloseModal}></BackDrop>}
      </CSSTransition>
    </Fragment>
  );
};

export default Modal;
