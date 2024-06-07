import Number from './Number';

function checkNumber(num) {
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

export default function NumberGenerator({ numbers }) {
  const numberList = numbers.map(number => {
    const bg = checkNumber(number);
    return (
      <Number background={bg} key={number}>
        {number}
      </Number>
    );
  });
  return <div>{numberList}</div>;
}
