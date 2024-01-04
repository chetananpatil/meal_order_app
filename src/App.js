// src/App.js
import React, { useState } from 'react';
import MealList from './components/MealList';

function App() {
  const [selectedMeals, setSelectedMeals] = useState([]);
  const people = ['Person 1', 'Person 2']; // Replace with your actual people data

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Food Order App</h1>
      <MealList selectedMeals={selectedMeals} setSelectedMeals={setSelectedMeals} people={people} />
    </div>
  );
}

export default App;

