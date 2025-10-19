//import { Fragment } from "react";
//Fragment use to remove unneccesary <div> .

import ErrorMessage from "./components/ErrorMessage";
import Fooditems from "./components/Fooditems";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  //let fooditems = []; 
  //let fooditems = ["Dal", "Green Salad", "Milk", "Green Vegetables", "Roti", "Ghee"];
  //let textToShow = "Value Entered by user";

  //Basic Way of useState Declaration---
  /*
  let textStateArr = useState("Value Entered by user");
  let textToShow = textStateArr[0];
  let setTextState = textStateArr[1];
  */

  //Optimized way of useState Declaration---
  /*
  let [textToShow, setTextState] = useState("Value Entered by User");
  console.log(`Current Value of Text State : ${textToShow}`);
  */
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

        {/* Tertiary Operator.
      {fooditems.length === 0 ? <h4>I am Still Hungry</h4> : null}

  Logical Operators. */}

        {/* {fooditems.length === 0 && <h4>I am Hungry</h4>} */}

        {/* <ul className="list-group">
        {
          fooditems.map((item) => (
               <li key={item} className="list-group-item">{item}</li>
          ))
        }
       
      </ul> */}

        <FoodInput handleKeyDown={onKeyDown} ></FoodInput>
        {/* <p>{ textToShow }</p> */}
        
        <ErrorMessage food={fooditems}></ErrorMessage>
        <Fooditems food={fooditems}></Fooditems>

      </Container>
{/* 
      <Container>
        <p>Above are the Helathy Foods, which are good for your health and well being.</p>
      </Container> */}
    </>
  );
}

export default App;