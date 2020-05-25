import React from 'react';

const CustomButton = (props) => {
  return React.createElement(
    'button',
    { color: props.color },
    '(React.createElement) Hello World!'
  );
};

export default CustomButton;
