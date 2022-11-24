import React from 'react';
import {v4 as uuidv4} from 'uuid'; 
import './App.css';
import foodsData from './foods.json';
import { useState } from 'react';
import FoodBox from './Components/FoodBox';
import AddFoodForm from './Components/AddFoodForm';
import Search from './Components/Search';
import { Row, Divider, Input } from 'antd';

function App() {
  const [foods, setFoods] = useState(
    foodsData.map((currentFood)=>({...currentFood, tempId: uuidv4()})));

  const deleteItem = (tempId)={ 
    setFoods(foods.filter((item) => item.tempId != tempId));
  };

  return (
    <div>
      <Row gutter={[8, 8]}>
        {foods.map((food) => (
          <FoodBox
            key={food.servings + food.name}
            name={food.name}
            calories={food.calories}
            image={food.image}
            Servings={food.servings}
            deleteItem={deleteItem}
          />
        ))}
        <AddFoodForm foods={foods} setFoods={setFoods} />
        <Search  query={query} SetQuery={SetQuery} />
      </Row>
    </div>
  );
}

export default App;
