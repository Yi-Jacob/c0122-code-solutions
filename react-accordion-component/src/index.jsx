import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordian';

const topics = [
  {
    topic: 'HTML',
    detail: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.'
  },
  {
    topic: 'CSS',
    detail: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.'
  },
  {
    topic: 'JavaScript',
    detail: 'JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries.'
  }
];

ReactDOM.render(
  <Accordion topics={topics}/>,
  document.getElementById('root')
);
