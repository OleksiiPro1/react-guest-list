/* @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ControlledComponent from './ControlledComponent';

const divH1Styles = css`
  margin-left: 100px;
`;
const h1Styles = css`
  color: grey;

  margin-top: 100px;
  margin-right: 300px;
`;

const guestListPhoto = {
  name: 'list',
  profileImageUrl: '',
};
function App() {
  return (
    <div className="App">
      <div css={divH1Styles}>
        <h1 css={h1Styles}>Guest {guestListPhoto.name} </h1>
      </div>
      <ControlledComponent />
    </div>
  );
}

export default App;
