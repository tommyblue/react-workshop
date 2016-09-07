import React from 'react';

class ColorSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: 'red' };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(e) {
    this.setState({ color: e.target.value });
  }

  render() {
    const { color } = this.state;
    return (
      <div style={{ backgroundColor: color }}>
        <b>Choose yout color:</b>
        <select value={color} onChange={this.changeColor}>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
      </div>
    );
  }
}

export default ColorSelector;
