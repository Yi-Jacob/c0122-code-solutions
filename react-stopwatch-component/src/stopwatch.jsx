import React from 'react';

class stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => (
      {
        isClicked: !prevState.isClicked
      }
    ));
  }

  render() {
    return (
      <>
      <div className="circle">
        test
      </div>
      <button onClick={this.handleClick}>
          {this.state.isClicked ? <i className="fa-solid fa-pause fa-3x"></i> : <i className="fa-solid fa-play fa-3x"></i>}
      </button>
      </>
    );
  }
}

export default stopwatch;
