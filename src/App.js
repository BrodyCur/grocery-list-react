import React from 'react';
import ShoppingList from './shoppingList';
import FilterCategories from './FilterCategories';
import NewItemForm from './NewItemForm';

const App = () => {
  return (
    <main className="layout">
      <header className="header">
        <h1>Grocery List</h1>
      </header>
      <NewItemForm />
      <FilterCategories />
      <ShoppingList />
    </main>
  );
};

export default App;
