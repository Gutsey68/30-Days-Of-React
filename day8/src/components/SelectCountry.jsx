import React, { Component } from 'react';
import { countriesData } from '../data/countriesData';

export default class SelectCountry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      capital: '',
      language: '',
      population: '',
      currency: '',
      flag: ''
    };
  }
  changeCountry = () => {
    const { flag, name, capital, language, population, currency } = this.state;
    const randomCountry =
      countriesData[Math.floor(Math.random() * countriesData.length)];
    console.log(randomCountry);
    this.setState({
      name: randomCountry.name,
      flag: randomCountry.flag,
      capital: randomCountry.capital,
      language: randomCountry.languages.join(' ,'),
      population: randomCountry.population,
      currency: randomCountry.currency
    });
  };
  render() {
    const { flag, name, capital, language, population, currency } = this.state;
    return (
      <div className="country">
        <div className="flag">
          <img src={flag} alt="" />
        </div>
        <p className="name">{name}</p>
        <div className="country-infos">
          <p>Capital: {capital}</p>
          <p>Language: {language}</p>
          <p>Population: {population}</p>
          <p>Currency: {currency}</p>
        </div>
        <button onClick={this.changeCountry}>Select Country</button>
      </div>
    );
  }
}
