// src/components/TagFilter.js
import React from 'react';
import { Chip } from '@mui/material';

const TagFilter = ({ setSelectedTag }) => {
  // Replace this with actual data fetching logic
  const tags = ['tag1', 'tag2', 'tag3']; // Tags associated with meals

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <div>
      <h3>Filter by Tag:</h3>
      {tags.map(tag => (
        <Chip
          key={tag}
          label={tag}
          clickable
          onClick={() => handleTagClick(tag)}
        />
      ))}
    </div>
  );
};

export default TagFilter;
