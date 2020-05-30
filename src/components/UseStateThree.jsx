import React, { useState } from 'react';

function UseStateThree() {
  const [name, setName] = useState({ burgerName: '', restaurantName: '' });

  return (
    <div>
      <input
        className='myinputone'
        type='text'
        value={name.burgerName}
        onChange={(e) => setName({ ...name, burgerName: e.target.value })}
      />
      <input
        className='myinputwo'
        type='text'
        value={name.restaurantName}
        onChange={(e) => setName({ ...name, restaurantName: e.target.value })}
      />
      <h2>Your burger is : {name.burgerName}</h2>
      <h3>Restaurant name is : {name.restaurantName}</h3>
    </div>
  );
}

export default UseStateThree;
