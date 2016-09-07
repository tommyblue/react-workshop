import React from 'react';
import ReactDOM from 'react-dom';
import ColorSelector from './color-selector.jsx';

class HelloReact extends React.Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const { counter } = this.state;
      this.setState({ counter: counter + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { counter } = this.state;
    return (<div>
      <h1 style={{ color: 'red' }}>Hello React! {counter}</h1>
      <ColorSelector />
    </div>);
  }
}

ReactDOM.render(<HelloReact />, document.getElementById('root-element'));
