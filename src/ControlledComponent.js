import React, { useState } from 'react';

export default function ControlledComponent() {
  const [inputName, setInputName] = useState('Oleksii ');
  const [inputLastName, setLastInputName] = useState('Piltenko');
  const [guests, setGuests] = useState([]);

  const handleAddGuest = (guestName, guestLastName) => {
    setGuests([
      ...guests,
      {
        name: guestName,
        surname: guestLastName,
        id: guests.length,
      },
    ]);
  };

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
              handleAddGuest({ inputName }, { inputLastName });
              console.log(guests);
            }}
            value={inputLastName}
          />
        </label>
      </form>
      <ul>
        {guests.map((guest) => (
          <li key={guest.id}>
            <span>{guest.name}</span>
            <span>{guest.surname}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
