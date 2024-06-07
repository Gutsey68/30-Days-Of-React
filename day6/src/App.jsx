import CountryDiagram from './components/CountryDiagram';
import HexadecimalColors from './components/HexadecimalColors';
import NumberGenerator from './components/NumberGenerator';

const arrayNumbers = [];
for (let i = 0; i < 32; i++) {
  arrayNumbers.push(i);
}

function generateRandomHexColor() {
  let hexColor = '#';
  const hexCharacters = '0123456789abcdef';
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hexCharacters.length);
    hexColor += hexCharacters[randomIndex];
  }
  return hexColor;
}

const arrayColors = [];
for (let i = 0; i < 32; i++) {
  arrayColors.push(generateRandomHexColor());
}

const countriesPopulation = [
  { country: 'World', population: 7693165599 },
  { country: 'China', population: 1377422166 },
  { country: 'India', population: 1295210000 },
  { country: 'USA', population: 323947000 },
  { country: 'Indonesia', population: 258705000 },
  { country: 'Brazil', population: 206135893 },
  { country: 'Pakistan', population: 194125062 },
  { country: 'Nigeria', population: 186988000 },
  { country: 'Bangladesh', population: 161006790 },
  { country: 'Russia', population: 146599183 },
  { country: 'Japan', population: 126960000 }
];

const App = () => {
  return (
    <div className="container">
      <div className="heading">
        <h1>30 Days Of React</h1>
        <p>Number Generator</p>
        <NumberGenerator numbers={arrayNumbers} />
      </div>
      <div className="hexodecimal">
        <p>Hexadecimal Colors</p>
        <HexadecimalColors colors={arrayColors} />
      </div>
      <div className="population">
        <p>World Population</p>
        <CountryDiagram countries={countriesPopulation} />
      </div>
    </div>
  );
};

export default App;
