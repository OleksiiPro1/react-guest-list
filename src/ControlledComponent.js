/* @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';

const ulStyles = css`
  list-style-type: none;
`;
const divH1Styles = css`
  margin-left: 100px;
  color: grey;
`;
export default function ControlledComponent() {
  const [inputName, setInputName] = useState('Oleksii');
  const [inputLastName, setLastInputName] = useState('Piltenko');
  const [guests, setGuests] = useState([]);
  const [party, setParty] = useState(guests.party);
  const handleAddGuest = (guestName, guestLastName) => {
    setGuests([
      ...guests,
      {
        name: guestName,
        surname: guestLastName,
        id: guests.length,
        party: false,
      },
    ]);
  };

  return (
    <div css={divH1Styles}>
      <form
        onSubmit={(event) => {
          console.log(event);
          event.preventDefault();
          handleAddGuest(inputName, inputLastName);
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
        <button type="submit">Add guest</button>
        <button
          onClick={() => {
            setInputName('');
            setLastInputName('');
          }}
        >
          Clean
        </button>
      </form>
      <ul css={ulStyles}>
        {guests.map((guest) => (
          <li key={guest.id}>
            <span>
              <input
                type="checkbox"
                value={party}
                onChange={(event) => event.currentTarget.checked}
              ></input>
            </span>
            <span>{guest.name}&nbsp;</span>
            <span>{guest.surname}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
