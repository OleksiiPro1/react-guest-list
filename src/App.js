/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const inputStyle = { color: 'blue' };
const styleReg = css`
  margin-left: 80px;
  margin-top: 50px;
`;

const buttonTextStyle = css``;
function App() {
  return (
    <div className="App">
      <div css={styleReg}>
        <label>
          First name
          <br />
          <input style={inputStyle} />
        </label>
        <br />
        <br />
        <label>
          Last name
          <br />
          <input style={inputStyle} />
        </label>
        <br />
        <br />
        <button>
          <p style={buttonTextStyle}>I will be on that party</p>
        </button>
      </div>
    </div>
  );
}

export default App;
