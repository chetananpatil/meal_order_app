// src/components/PersonList.js
import React from 'react';
import { Radio, RadioGroup, FormControlLabel } from '@mui/material';

const PersonList = ({ setSelectedPerson }) => {
  // Replace this with actual data fetching logic
  const people = ['Person 1', 'Person 2'];

  const handlePersonChange = (event) => {
    setSelectedPerson(event.target.value);
  };

  return (
    <div>
      <h3>Select Person:</h3>
      <RadioGroup onChange={handlePersonChange}>
        {people.map(person => (
          <FormControlLabel
            key={person}
            value={person}
            control={<Radio />}
            label={person}
          />
        ))}
      </RadioGroup>
    </div>
  );
};

export default PersonList;
