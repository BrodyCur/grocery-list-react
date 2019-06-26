import React from 'react';

const ListItem = ({amount, product, className, handleValueChange}) => {

  const updateValue = (newAmount) => {
    if(newAmount >= 0) {
      handleValueChange(newAmount);
    };
  };

  return (
    <li className={className}>
      <button type="button" className="btn up" onClick={ () => updateValue(amount - 1) }>-</button>
      <span>{amount} {product}</span>
      <button type="button" className="btn down" onClick={ () => updateValue(amount + 1) }>+</button>
    </li>
  );
};

export default ListItem;
