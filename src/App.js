import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import MealsItem from "./components/MealsItem";
import MealsList from "./components/MealsList";
import Modal from "./components/modal/Modal";
import { counterActions } from "./components/store/counter";
import "./components/styles.scss";
const MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    count: 0,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
    count: 0,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    count: 0,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    count: 0,
  },
];
function App() {
  const [isShowModal, setIsShowModal] = useState(false);
  const dispatch = useDispatch();
  const showModalHandler = function () {
    setIsShowModal(true);
  };
  const closeModalHandler = function () {
    setIsShowModal(false);
    dispatch(counterActions.setOrderMessage(false));
  };
  return (
    <Fragment>
      <Modal
        meals={MEALS}
        isShowModal={isShowModal}
        onCloseModal={closeModalHandler}></Modal>

      <Header onShowModal={showModalHandler}></Header>

      <MealsItem MEALS={MEALS}></MealsItem>
    </Fragment>
  );
}

export default App;
