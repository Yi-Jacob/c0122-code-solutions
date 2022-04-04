import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      status: !this.state.status
    });
  }

  openDrawer() {
    if (this.state.status) {
      return 'drawer open';
    } else {
      return 'drawer';
    }
  }

  render() {
    return (
      <div>
        <i className="fa-solid fa-bars fa-3x" onClick={this.handleClick}></i>
        <div onClick={this.handleClick} className={this.openDrawer()}>
          <div className="content">
            <h1 onClick={this.handleClick}>Menu</h1>
            <p onClick={this.handleClick}>About</p>
            <p onClick={this.handleClick}>Get Started</p>
            <p onClick={this.handleClick}>Sign In</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AppDrawer;
