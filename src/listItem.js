import React from 'react';

const ListItem = ({amount, product, className}) => {

  return (
    <li className={className}>
      <button>-</button>
      <span>{amount} {product}</span>
      <button>+</button>
    </li>
  );
};

export default ListItem;
