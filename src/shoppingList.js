import React, { useState } from 'react';
import ListItem from './listItem'

const ShoppingList = () => {

  let meat = 0;
  let prod = 0;
  let dairy = 0;
  let bakery = 0;

  let [m, setM] = useState(meat);
  let [p, setP] = useState(prod);
  let [d, setD] = useState(dairy);
  let [b, setB] = useState(bakery);

  return (
    <ul id='shoppingList' className='shoppinglist'>
      <ListItem amount={m} handleValueChange={setM} product="Steaks" className="meat" />
      <ListItem amount={p} handleValueChange={setP} product="Apples" className="prod" />
      <ListItem amount={d} handleValueChange={setD} product="Milk (1L, 2%)" className="dairy" />
      <ListItem amount={b} handleValueChange={setB} product="Baguettes" className="bakery" />
    </ul>
  );
};

export default ShoppingList;
