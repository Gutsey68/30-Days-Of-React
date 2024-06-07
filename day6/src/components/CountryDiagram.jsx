import Country from './Country';

export default function CountryDiagram({ countries }) {
  const countryList = countries.map(country => {
    return <Country key={country.name} country={country} />;
  });
  return <div>{countryList}</div>;
}
