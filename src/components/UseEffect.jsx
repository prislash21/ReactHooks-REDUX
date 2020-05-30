import React, { useEffect, useState } from 'react';

function UseEffect() {
  const [count, setState] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log(`useEffect - updating document title`);
    document.title = `you clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setState(count + 1)}> Click {count} times</button>
    </div>
  );
}

export default UseEffect;
