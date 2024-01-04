# Food Order App

This is a simple React application for ordering food and drinks. The app allows users to choose meals, select drinks for each meal, filter meals by tags, associate meal selection with a person, and view the total price of the selected items.

## Features

- Show a list of meals with basic meal information, an image, and the option to select a drink with a meal (drink selection is optional).
- Show a list of tags and filter meals based on the selected tag. In the dataset provided, meals already have tags associated with them.
- Show a list of at least 2 people. Meal selection is associated with the currently selected person. There is an option to deselect a meal.
- Show a total price of all currently selected meals and drinks.

Code Explanation:

1) MealList.js:
The component fetches meal data from a JSON file (meals.json) and displays a list of meals with images.
It allows selecting drinks for each meal (optional).
Provides a tag filter to show meals based on the selected tag.
Allows selecting a person and associates meal selection with that person.
Provides options to add a meal to the order and to deselect a meal.
Displays the total price of the selected meals and drinks.

2)App.js:
The main app component that renders the MealList component.
Manages the state for selected meals.

3)meals.json:
Contains an array of labels and an array of meals with associated data such as id, title, starter, desert, price, labels, image (img), and drinks.

The app should now be running on http://localhost:3000.
To start app give command npm start
