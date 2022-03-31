import React from 'react';

class toggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  toggleView(count) {
    if (count % 2 === 0) {
      return 'on';
    } else {
      return 'off';
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({
          count: this.state.count + 1
        })}
        className={this.toggleView(this.state.count)}
        >
          Toggle
          </button>
        <h1>ON</h1>
      </div>
    );
  }
}

export default toggleSwitch;
