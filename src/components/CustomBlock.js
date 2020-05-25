import React from 'react';

class CustomBlock extends React.Component {
  render() {
    return (
      <div>(Class Component, React.Component) Hello {this.props.text}</div>
    );
  }
}

export default CustomBlock;
