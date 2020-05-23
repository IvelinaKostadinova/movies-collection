import React from 'react';

class CustomPureBlock extends React.PureComponent {
  render() {
    return (
      <div>(Class Component, React.PureComponent) Hello {this.props.text}</div>
    );
  }
}

export default CustomPureBlock;
