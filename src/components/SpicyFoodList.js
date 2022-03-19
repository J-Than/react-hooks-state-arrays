import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [cusine, setCuisine] = useState('All');

  function handleAddFood() {
    // const newFood = getNewSpicyFood();
    // setFoods(foods => [...foods, newFood]);
    setFoods(foods => [...foods, getNewSpicyFood()])
  }

  function handleLiClick(id) {
    // setFoods(foods => foods.filter((food) => food.id !== id))
    setFoods(foods => [...foods], (foods.find(food => food.id===id)).heatLevel ++)
  }

  function showHide(filterCuisine) {
    if (cuisine==='All') {return true}
    return cuisine===filterCuisine
  }

  function handleFilter(e) {
    setCuisine(e.target.value)
  }

  const foodList = foods.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)} hidden={!showHide(food.cuisine)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
      <select name="filter" onChange={handleFilter}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
    </div>
  );
}

export default SpicyFoodList;
