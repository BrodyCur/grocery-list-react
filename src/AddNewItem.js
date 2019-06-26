import React from 'react';

const AddNewItem = () => {

  return (
    <div className="addnew">
      <input type="text" name="item" id="itemName" className="form-component inpt" placeholder="What do you need?" />
      <input type="submit" value="Add" className="form-component btn" />
    </div>
  );
};

export default AddNewItem;