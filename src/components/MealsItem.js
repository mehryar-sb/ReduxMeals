import { useDispatch } from "react-redux";
import { counterActions } from "./store/counter";
import { useState } from "react";
import MealsList from "./MealsList";

const MealsItem = (props) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const inputHandler = function (e) {
    setInput(Number(e.target.value));
  };

  const submitHandler = function (e) {
    e.preventDefault();
    const uniqueForm = e.target.className.split(" ");
    props.MEALS.forEach((item) => {
      if (uniqueForm.find((item2) => item2 === item.id)) {
        dispatch(
          counterActions.addtoCart({
            item: item,
            input: input,
            price: item.price,
          }),
        );
      }
    });
  };

  const items = props.MEALS.map((meal) => {
    return (
      <li
        key={meal.id}
        className=" w-full h-[120px] flex justify-between items-center border-b-2 border-gray-300">
        <div className="flex flex-col gap-[.5px]">
          <h3>{meal.name}</h3>

          <h4 className="font-normal">{meal.description}</h4>
          <h3 className="text-orange-900">${meal.price}</h3>
        </div>
        <form
          onSubmit={submitHandler}
          action=""
          className={`flex flex-col items-center gap-4 ${meal.id}`}>
          <div className="flex justify-center gap-2 ">
            <label htmlFor="">
              <h5>Amount</h5>
            </label>
            <input
              onChange={inputHandler}
              type="number"
              min={1}
              max={5}
              step={1}
              defaultValue={1}
              className={`w-[50px] px-2  text-lg border border-gray-700 rounded-lg outline-none justify-self-end `}
            />
          </div>
          <button
            className={`w-9/12 py-1 text-white bg-orange-900 rounded-3xl `}>
            <h5>+ Add</h5>
          </button>
        </form>
      </li>
    );
  });
  return <MealsList>{items}</MealsList>;
};

export default MealsItem;
