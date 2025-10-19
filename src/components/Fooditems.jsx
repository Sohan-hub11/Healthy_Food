import { useState } from "react";
import Items from "./Items";

const Fooditems = ( { food }) => {

    let [activeItems, setActiveItems] = useState([]);

    const onBuyClick = (item, event) => {
        let newItems = [...activeItems,item];
        setActiveItems(newItems);
    }
    return (
        <ul className="list-group">
            {
                food.map((item) => (
                  <Items key = {item} fooditems = {item}
                    brought={activeItems.includes(item)}
                    handleBuyButton = {(event) => {
                        console.log(` ${item} brought`);
                        onBuyClick(item, event);
                    }}      
                  ></Items>
                ))
            }

        </ul>
    );
};

export default Fooditems;