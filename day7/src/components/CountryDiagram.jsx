import React from 'react';
import Country from './Country';

class CountryDiagram extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const countryList = this.props.countries.map((country, index) => {
      return <Country key={index} country={country} />;
    });

    return <div>{countryList}</div>;
  }
}

export default CountryDiagram;
