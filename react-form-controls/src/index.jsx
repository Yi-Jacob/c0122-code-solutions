import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ input: '' });

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state.input);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="text" input={this.state.input} onChange={this.handleChange} />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}

export default NewsletterForm;
const rooot = document.querySelector('#root');

ReactDOM.render(
  <NewsletterForm />,
  rooot
);
