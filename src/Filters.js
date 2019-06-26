import React from 'react';
import Category from './Category';

const Filters = () => {

  return (
    <ul className="filters">
      <Category value="all" id="filter0" />
      <Category value="meat" id="filter1" />
      <Category value="prod" id="filter2" />
      <Category value="dairy" id="filter3" />
      <Category value="bakery" id="filter4" />
    </ul>
  );
};

export default Filters;