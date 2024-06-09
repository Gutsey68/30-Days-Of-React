import React from 'react';
import Number from './Number';

class NumberGenerator extends React.Component {
  constructor(props) {
    super(props);
  }
  checkNumber(num) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      return 'prime';
    }
    if (num % 2 === 0) {
      return 'even';
    } else {
      return 'odd';
    }
  }
  render() {
    const numberList = this.props.numbers.map(number => {
      const bg = this.checkNumber(number);
      return (
        <Number background={bg} key={number}>
          {number}
        </Number>
      );
    });
    return <div>{numberList}</div>;
  }
}

export default NumberGenerator;
