import React, { useState } from 'react';

function UseState() {
  const [rateme, setRateme] = useState(0);
  return (
    <div>
      <button className='mybutton' onClick={() => setRateme(rateme + 1)}>
        RATE ME {rateme}
      </button>
    </div>
  );
}

export default UseState;
