import React, { useState } from 'react';

function UseStateTwo() {
  const initialvalue = 0;
  const [count, setCount] = useState(initialvalue);
  return (
    <div>
      Count:{count}
      <br />
      <b />
      <button className='myresetbutton' onClick={() => setCount(initialvalue)}>
        Reset
      </button>
      <button
        className='myincreasebutton'
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Increase
      </button>
      <button
        className='mydecreasebutton'
        onClick={() => setCount((prevCount) => prevCount - 1)}
      >
        Decrease
      </button>
    </div>
  );
}

export default UseStateTwo;
