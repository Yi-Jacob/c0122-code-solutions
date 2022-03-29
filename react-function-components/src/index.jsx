/*
import React from 'react';
import ReactDom from 'react-dom';

function CustomButton(props) {
  return <button>${props.message}</button>;
}

const buttonMessage = <CustomButton message="Click Me!" />;
const root = document.getElementById('root');

ReactDom.render(buttonMessage, root);
*/

import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton() {
  return <button>Click Me!</button>;
}

ReactDOM.render(
  <CustomButton />,
  document.getElementById('root')
);
