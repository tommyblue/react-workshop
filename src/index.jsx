import React from 'react';
import ReactDOM from 'react-dom';

class HelloReact extends React.Component {
  render() {
    return (<h1 style={{color: 'red'}}>Hello React!</h1>);
  }
};

ReactDOM.render(<HelloReact />, document.getElementById('root-element'));
