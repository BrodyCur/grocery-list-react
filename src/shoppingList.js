import React from 'react';
import ListItem from './listItem'

const ShoppingList = () => {


  return (
    <ul id='shoppingList' className='shoppinglist'>
      <ListItem amount="3" product="Steaks" className="meat" />
      <ListItem amount="4" product="apples" className="prod" />
      <ListItem amount="1" product="Milk (1L 2%)" className="dairy" />
      <ListItem amount="2" product="Baguettes" className="bakery" />
    </ul>
  );
};

export default ShoppingList;
