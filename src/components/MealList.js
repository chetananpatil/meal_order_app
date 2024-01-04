// src/components/MealList.js
import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Chip,
} from '@mui/material';

const MealList = ({ selectedMeals, setSelectedMeals, people }) => {
  const [mealsData, setMealsData] = useState({ labels: [], meals: [] });
  const [selectedTag, setSelectedTag] = useState(null);
  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(() => {
    fetch('/meals.json') // Assuming the JSON file is in the public folder
      .then((response) => response.json())
      .then((data) => setMealsData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleDrinkSelection = (mealId, drink) => {
    const updatedMeals = selectedMeals.map((meal) =>
      meal.id === mealId ? { ...meal, selectedDrink: drink } : meal
    );
    setSelectedMeals(updatedMeals);
  };

  const handleTagSelection = (tag) => {
    setSelectedTag(tag);
  };

  const handlePersonSelection = (person) => {
    setSelectedPerson(person);
  };

  const handleMealSelection = (meal) => {
    const updatedMeals = [...selectedMeals, { ...meal, person: selectedPerson }];
    setSelectedMeals(updatedMeals);
  };

  const handleMealDeselection = (mealId) => {
    const updatedMeals = selectedMeals.filter((meal) => meal.id !== mealId);
    setSelectedMeals(updatedMeals);
  };

  const getTotalPrice = () => {
    return selectedMeals.reduce((total, meal) => total + meal.price, 0);
  };

  return (
    <div>
      <h2>Choose Meals and Drinks:</h2>
      <div>
        <h3>Filter by Tag:</h3>
        {mealsData.labels.map((tag) => (
          <Chip
            key={tag.id}
            label={tag.label}
            clickable
            onClick={() => handleTagSelection(tag.id)}
            color={tag.id === selectedTag ? 'primary' : 'default'}
            style={{ marginRight: '5px', marginBottom: '5px' }}
          />
        ))}
      </div>
      <div>
        <h3>Select Person:</h3>
        <FormControl fullWidth>
          <InputLabel id="person-label">Select Person</InputLabel>
          <Select
            labelId="person-label"
            id="person-select"
            value={selectedPerson || ''}
            label="Select Person"
            onChange={(e) => handlePersonSelection(e.target.value)}
          >
            {people.map((person) => (
              <MenuItem key={person} value={person}>
                {person}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      {mealsData.meals
        .filter((meal) => !selectedTag || meal.labels.includes(selectedTag))
        .map((meal) => (
          <Card key={meal.id} style={{ marginBottom: '20px' }}>
            <CardMedia component="img" height="140" image={meal.img} alt={meal.title} />
            <CardContent>
              <Typography variant="h5" component="div">
                {meal.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: ${meal.price}
              </Typography>
              <FormControl fullWidth>
                <InputLabel id={`drink-label-${meal.id}`}>Select Drink</InputLabel>
                <Select
                  labelId={`drink-label-${meal.id}`}
                  id={`drink-select-${meal.id}`}
                  value={selectedMeals.find((selectedMeal) => selectedMeal.id === meal.id)?.selectedDrink || ''}
                  label="Select Drink"
                  onChange={(e) => handleDrinkSelection(meal.id, e.target.value)}
                >
                  {meal.drinks.map((drink) => (
                    <MenuItem key={drink.id} value={drink.title}>
                      {drink.title} (${drink.price})
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {selectedPerson && (
                <div>
                  <Button
                    variant="contained"
                    onClick={() => handleMealSelection(meal)}
                    style={{ marginTop: '10px' }}
                  >
                    Add to Order
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => handleMealDeselection(meal.id)}
                    style={{ marginLeft: '10px', marginTop: '10px' }}
                  >
                    Deselect
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      {selectedMeals.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h2>Order Summary:</h2>
          <Typography variant="h6">Total Price: ${getTotalPrice().toFixed(2)}</Typography>
        </div>
      )}
    </div>
  );
};

export default MealList;
