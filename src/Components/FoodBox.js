import React from 'react';
import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox({ name, calories, image, Servings, deleteItem }) {
  return (
    <Col>
      <Card name={name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {Servings}</p>
        <p>
          <b>Total Calories: {+calories * +Servings} </b> kcal
        </p>
        <Button onClick={() => [deleteItem(food.tempId)]} type="primary">
          {' '}
          Delete{' '}
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
