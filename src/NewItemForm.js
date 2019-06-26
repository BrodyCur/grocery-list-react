import React from 'react';
import AddNewItem from './AddNewItem';

const NewItemForm = () => {

  return (
    <form id="newItem" className="newitem" autoComplete="off">
      <label htmlFor="itemName" className="line-label">New Item</label>
      <AddNewItem />
    </form>
  );
};

export default NewItemForm;