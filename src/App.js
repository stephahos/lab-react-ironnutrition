import React from 'react';
import './App.css';
import foodsData from './foods.json';
import { useState } from 'react';
import FoodBox from './Components/FoodBox';
import AddFoodForm from './Components/AddFoodForm';
import Search from './Components/Search';

function App() {
  const [foods, setFoods] = useState(foodsData);

  return (
    <div>
      {foods.map((food) => (
        <FoodBox
          key={food.servings + food.name}
          title={food.name}
          calories={food.calories}
          image={food.image}
          Servings={food.servings}
        />
      ))}
      <AddFoodForm foods={foods} setFoods={setFoods} />
      <Search />
    </div>
  );
}

export default App;
