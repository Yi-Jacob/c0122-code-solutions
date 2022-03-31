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

      return 'white';

    } else if (count <= 5) {

      return 'purple';
    } else if (count <= 8) {

      return 'medium-purple';
    } else if (count <= 11) {

      return 'coral';
    } else if (count <= 14) {

      return 'orange';
    } else if (count <= 17) {

      return 'yellow';
    } else {

      return 'white';
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
