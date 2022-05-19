import React, { useState } from 'react';

export default function ControlledComponent() {
  const [inputName, setInputName] = useState('Oleksii ');
  const [inputLastName, setLastInputName] = useState('Piltenko');

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label>
          First Name{' '}
          <input
            onChange={(event) => {
              setInputName(event.currentTarget.value);
            }}
            value={inputName}
          />
        </label>
        <label>
          Last Name{' '}
          <input
            onChange={(event) => {
              setLastInputName(event.currentTarget.value);
            }}
            value={inputLastName}
          />
        </label>
      </form>
    </div>
  );
}
