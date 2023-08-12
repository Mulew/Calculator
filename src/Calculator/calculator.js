import React from 'react';
import './calculator.css';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: '0',
    };
  }

  handleClick = (event) => {
    const value = event.target.textContent;
    if (value === 'AC') {
      this.clear();
    } else if (value === '+/-') {
      this.toggleSign();
    } else if (value === '%') {
      this.calculatePercentage();
    } else if (value === '=') {
      this.calculateResult();
    } else {
      this.updateCurrentValue(value);
    }
  };

  clear() {
    this.setState({
      currentValue: '0',
    });
  }

  toggleSign() {
    this.setState((prevState) => ({
      currentValue: prevState.currentValue.charAt(0) === '-' ? prevState.currentValue.slice(1) : '-' + prevState.currentValue,
    }));
  }

  calculatePercentage() {
    this.setState((prevState) => ({
      currentValue: (parseFloat(prevState.currentValue) / 100).toString(),
    }));
  }

  calculateResult() {
    try {
      const result = eval(this.state.currentValue);
      this.setState({
        currentValue: result.toString(),
      });
    } catch (error) {
      this.setState({
        currentValue: 'Error',
      });
    }
  }

  updateCurrentValue(value) {
    this.setState((prevState) => ({
      currentValue: prevState.currentValue === '0' ? value : prevState.currentValue + value,
    }));
  }

  render() {
    return (
      <div className='Container'>
        <div className='screen'>
          <h1>{this.state.currentValue}</h1>
        </div>
        <div className='numbers'>
          <h4 className='item1' onClick={this.handleClick}>
            AC
          </h4>
          <h4 className='item1' onClick={this.handleClick}>
            +/-
          </h4>
          <h4 className='item1' onClick={this.handleClick}>
            %
          </h4>
          <h4 className='item0' onClick={this.handleClick}>
            +
          </h4>
          <h4 className='item1' onClick={this.handleClick}>
            7
          </h4>
          <h4 className='item1' onClick={this.handleClick}>
            8
          </h4>
          <h4 className='item1' onClick={this.handleClick}>
            9
          </h4>
          <h4 className='item0' onClick={this.handleClick}>
            *
          </h4>
          <h4 className='item1' onClick={this.handleClick}>
            4
          </h4>
          <h4 className='item1' onClick={this.handleClick}>
            5
          </h4>
          <h4 className='item1' onClick={this.handleClick}>
            6
          </h4>
          <h4 className='item0' onClick={this.handleClick}>
            -
          </h4>
          <h4 className='item1' onClick={this.handleClick}>
            1
          </h4>
          <h4 className='item1' onClick={this.handleClick}>
            2
          </h4>
          <h4 className='item1' onClick={this.handleClick}>
            3
          </h4>
          <h4 className='item0' onClick={this.handleClick}>
            +
          </h4>
          <h4 className='item1x' onClick={this.handleClick}>
            0
          </h4>
          <h4 className='item0' onClick={this.handleClick}>
            =
          </h4>
        </div>
      </div>
    );
  }
}