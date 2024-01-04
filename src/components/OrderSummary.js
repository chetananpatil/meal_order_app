// src/components/OrderSummary.js
import React from 'react';
import { Typography } from '@mui/material';

const OrderSummary = ({ selectedMeals }) => {
  const total = selectedMeals.reduce((acc, meal) => acc + meal.price, 0);

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Order Summary:</h2>
      <Typography variant="h6">Total: ${total}</Typography>
      {/* Display other order summary information as needed */}
    </div>
  );
};

export default OrderSummary;
