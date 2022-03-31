import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.handleClick = this.handleClick.bind(this);

  }

  getSwitches() {
    if (this.state.isClicked) {
      return 'toggle toggle-on';
    } else {
      return 'toggle';
    }
  }

  handleClick() {
    this.setState(prev => ({ isClicked: !prev.isClicked }));
  }

  render() {
    return <>
      <div className="toggle-switch" onClick={this.handleClick}>
        <label className={this.state.isClicked ? 'label label-on' : 'label label-off'}>
          <div className={this.getSwitches()} />
        </label>
      </div>
      <span>{this.state.isClicked ? 'ON' : 'OFF'}</span>
    </>;
  }
}

export default ToggleSwitch;
