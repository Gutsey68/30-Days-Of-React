import React from 'react';
import Portfolio from './components/Portfolio';
import SelectCountry from './components/SelectCountry';

class App extends React.Component {
  showDate = time => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    const month = months[time.getMonth()].slice(0, 3);
    const year = time.getFullYear();
    const date = time.getDate();
    return ` ${month} ${date}, ${year}`;
  };
  handleTime = () => {
    alert(this.showDate(new Date()));
  };
  greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020');
  };
  render() {
    return (
      <div className="App">
        <Portfolio
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
        />
        <SelectCountry />
      </div>
    );
  }
}

export default App;
