import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  toggle() {
    if (this.state.status) {
      return 'toggle toggle-on';
    } else {
      return 'toggle';
    }
  }

  handleClick() {
    this.setState(prev => ({ status: !prev.status }));
  }

  render() {
    return <>
      <div className="toggle-switch" onClick={this.handleClick}>
        <label className={this.state.status ? 'label label-on' : 'label label-off'}>
          <div className={this.toggle()} />
        </label>
      </div>
      <span>{this.state.status ? 'ON' : 'OFF'}</span>
    </>;
  }
}

export default ToggleSwitch;
