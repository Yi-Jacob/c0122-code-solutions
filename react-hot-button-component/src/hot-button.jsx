import React from 'react';

class hotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

  }

  getColor(count) {
    if (count <= 2) {
      return 'normal';
    } else if (count <= 5) {
      return 'cold';
    } else if (count <= 8) {
      return 'cool';
    } else if (count <= 11) {
      return 'tepid';
    } else if (count <= 14) {
      return 'warm';
    } else if (count <= 17) {
      return 'hot';
    } else {
      return 'nuclear';
    }
  }

  render() {
    return (
      <button onClick={() => this.setState({ count: this.state.count + 1 })}
        className={(this.getColor(this.state.count))}>
        Hot Button
      </button>
    );
  }
}

export default hotButton;
