import { Fragment } from "react";
import ErrorMessage from "./components/ErrorMessage";
import Fooditems from "./components/Fooditems";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  let [textToShow, setTextState] = useState();
  let [fooditems, setFoodItems] = useState([
    "Dal", 
    "Green Salad", 
    "Milk"
  ]);

  const onKeyDown = ( event ) => {
        if(event.key === 'Enter'){
          let newFoodItem = (event.target.value);
          let newItem = [...fooditems,newFoodItem];
          setFoodItems(newItem);
          console.log(`New Food item entered is : ${newFoodItem}`);
        }
    };

  return (
    <> 
      <Container>
        <h1 className="food_heading">Healthy Foods</h1>

        <FoodInput handleKeyDown={onKeyDown} ></FoodInput>
        {
        <ErrorMessage food={fooditems}></ErrorMessage>
        <Fooditems food={fooditems}></Fooditems>

      </Container>
    </>
  );
}

export default App;
