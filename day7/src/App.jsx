import React from 'react';
import CountryDiagram from './components/CountryDiagram';
import HexadecimalColors from './components/HexadecimalColors';
import NumberGenerator from './components/NumberGenerator';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  countriesPopulation = [
    { name: 'World', population: 7693165599 },
    { name: 'China', population: 1377422166 },
    { name: 'India', population: 1295210000 },
    { name: 'USA', population: 323947000 },
    { name: 'Indonesia', population: 258705000 },
    { name: 'Brazil', population: 206135893 },
    { name: 'Pakistan', population: 194125062 },
    { name: 'Nigeria', population: 186988000 },
    { name: 'Bangladesh', population: 161006790 },
    { name: 'Russia', population: 146599183 },
    { name: 'Japan', population: 126960000 }
  ];
  arrayColors = [];
  generateRandomHexColor() {
    let hexColor = '#';
    const hexCharacters = '0123456789abcdef';
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * hexCharacters.length);
      hexColor += hexCharacters[randomIndex];
    }
    return hexColor;
  }
  arrayNumbers = [];

  render() {
    for (let i = 0; i < 32; i++) {
      this.arrayNumbers.push(i);
    }
    for (let i = 0; i < 32; i++) {
      this.arrayColors.push(this.generateRandomHexColor());
    }
    return (
      <div className="container">
        <div className="heading">
          <h1>30 Days Of React</h1>
          <p>Number Generator</p>
          <NumberGenerator numbers={this.arrayNumbers} />
        </div>
        <div className="hexodecimal">
          <p>Hexadecimal Colors</p>
          <HexadecimalColors colors={this.arrayColors} />
        </div>
        <div className="population">
          <p>World Population</p>
          <CountryDiagram countries={this.countriesPopulation} />
        </div>
      </div>
    );
  }
}

export default App;
