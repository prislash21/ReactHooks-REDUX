import React, { useState, useEffect } from 'react';

// run effect only once
function UseEffectMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const logmouseposition = (e) => {
    console.log('mouse event');
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log('useEffect called');
    window.addEventListener('mousemove', logmouseposition);
  }, []);

  return (
    <div>
      Myhooks- x:{x} y: {y}
    </div>
  );
}

export default UseEffectMouse;
