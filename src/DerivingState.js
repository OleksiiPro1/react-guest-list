import React, { useState } from 'react';

export default function DerivingState() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div>
      <div>{count1}</div>
      <button onClick={() => setCount1(count1 + 1)}>+</button>
      <button onClick={() => setCount1(count1 - 1)}>-</button>
      <div>{count2}</div>
      <button onClick={() => setCount2(count1 + 1)}>+</button>
      <button onClick={() => setCount2(count1 - 1)}>-</button>
      <div>Positive values: 1, 2</div>
    </div>
  );
}
