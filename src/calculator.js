import React,{useState} from 'react';
import './calculator.css';
const Calculator = () => {
  const [currentValue, setCurrentValue] = useState('0');

  const updateValue = (value) => {
    setCurrentValue((oldvalue) =>
    oldvalue === '0' ? value : oldvalue + value
  );};

  const calculateResult = () => {
    let expression = eval(currentValue);
    setCurrentValue((oldstate) =>
    oldstate + ' = ' + expression.toString()
  );};

  const clear = () => {
    setCurrentValue('');
  };

  const percentage = () => {
    setCurrentValue((prevState) => parseFloat(prevState.currentValue / 100));
  };

  const handleClick = (event) => {
    let value = event.target.textContent;
    if (value === 'X') {
      clear();
    } else if (value === '=') {
      calculateResult();
    } else if (value === '%') {
      percentage();
    } else {
      updateValue(value);
    }
  };

  return (
    <div className='Container'>
      <div className='screen'>
        <h1>{currentValue}</h1>
      </div>
      <div className='numbers'>
        <h4 className='item1' onClick={handleClick}>
          X
        </h4>
        <h4 className='item1' onClick={handleClick}>
          +/-
        </h4>
        <h4 className='item1' onClick={handleClick}>
          %
        </h4>
        <h4 className='item0' onClick={handleClick}>
          +
        </h4>
        <h4 className='item1' onClick={handleClick}>
          7
        </h4>
        <h4 className='item1' onClick={handleClick}>
          8
        </h4>
        <h4 className='item1' onClick={handleClick}>
          9
        </h4>
        <h4 className='item0' onClick={handleClick}>
          *
        </h4>
        <h4 className='item1' onClick={handleClick}>
          4
        </h4>
        <h4 className='item1' onClick={handleClick}>
         5
        </h4>
        <h4 className='item1' onClick={handleClick}>
          6
        </h4>
        <h4 className='item0' onClick={handleClick}>
          -
        </h4>
        <h4 className='item1' onClick={handleClick}>
          1
        </h4>
        <h4 className='item1' onClick={handleClick}>
          2
        </h4>
        <h4 className='item1' onClick={handleClick}>
          3
        </h4>
        <h4 className='item0' onClick={handleClick}>
          +
        </h4>
        <h4 className='item1x' onClick={handleClick}>
          0
        </h4>
        <h4 className='item0' onClick={handleClick}>
          =
        </h4>
      </div>
    </div>
  );
};

export default Calculator;