import React from 'react';
import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm({ foods, setFoods }) {
  const [newName, setNewName] = useState('');

  const [newImage, setNewImage] = useState('');

  const [newCalories, setNewCalories] = useState('');

  const [newServings, setNewServings] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ newName, newImage, newCalories, newServings });
    setFoods([
      ...foods,
      {
        name: newName,
        calories: newCalories,
        image: newImage,
        servings: newServings,
      },
    ]);
    setNewName('');
    setNewImage('');
    setNewCalories('');
    setNewServings('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={newName}
        type="text"
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />

      <label>Image</label>
      <Input
        value={newImage}
        type="text"
        onChange={(event) => {
          setNewImage(event.target.value);
        }}
      />

      <label>Calories</label>
      <Input
        value={newCalories}
        type="number"
        onChange={(event) => {
          setNewCalories(event.target.value);
        }}
      />

      <label>Servings</label>
      <Input
        value={newServings}
        type="number"
        onChange={(event) => {
          setNewServings(event.target.value);
        }}
      />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
