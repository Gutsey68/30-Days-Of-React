import { useEffect, useState } from 'react';

function App() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCatsData = async () => {
      const url = 'https://api.thecatapi.com/v1/breeds';
      try {
        const response = await fetch(url);
        const data = await response.json();
        setCats(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCatsData();
  }, []);

  function calculateAverageWeight(cats) {
    const totalWeight = cats.reduce((sum, cat) => {
      const [minWeight, maxWeight] = cat.weight.metric.split(' - ').map(Number);
      const averageWeight = (minWeight + maxWeight) / 2;
      return sum + averageWeight;
    }, 0);

    const averageWeight = totalWeight / cats.length;
    return Math.round(averageWeight * 100) / 100;
  }

  const avgWeigthCats = calculateAverageWeight(cats);

  function calculateLifeSpan(cats) {
    const totalLifeSpan = cats.reduce((sum, cat) => {
      const [min, max] = cat.life_span.split(' - ').map(Number);
      const avarageLifeSpan = (min + max) / 2;
      return sum + avarageLifeSpan;
    }, 0);

    const avarageLifeSpan = totalLifeSpan / cats.length;
    return Math.round(avarageLifeSpan * 100) / 100;
  }

  const avgLifeSpanCats = calculateLifeSpan(cats);

  function countCountriesWithCatBreeds(cats) {
    const countriesSet = new Set(cats.map(cat => cat.country_code));
    return countriesSet.size;
  }

  const countCountries = countCountriesWithCatBreeds(cats);

  function countryWithMostCatBreeds(cats) {
    const countryCount = cats.reduce((acc, cat) => {
      acc[cat.country_code] = (acc[cat.country_code] || 0) + 1;
      return acc;
    }, {});

    return Object.keys(countryCount).reduce((a, b) =>
      countryCount[a] > countryCount[b] ? a : b
    );
  }

  const countryMostBreeds = countryWithMostCatBreeds(cats);

  function sortCountriesByCatBreeds(cats) {
    const countryCount = cats.reduce((acc, cat) => {
      acc[cat.origin] = (acc[cat.origin] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(countryCount)
      .sort((a, b) => a[1] - b[1])
      .map(entry => entry[0]);
  }

  const sortedCountries = sortCountriesByCatBreeds(cats);
  console.log(sortedCountries);

  return (
    <div className="app">
      <div className="heading">
        <h1>30 Days Of React</h1>
        <h2>Cats Paradise</h2>
        <p>There are {cats.length} cat breeds</p>
        <p>
          On average a cat can weigth about{' '}
          <span className="cats">{avgWeigthCats}</span> kg and live{' '}
          <span className="cats">{avgLifeSpanCats}</span> years
        </p>
        <p>
          {' '}
          <span className="cats">{countCountries}</span> countries have cat
          breeds
        </p>
        <p>
          {' '}
          <span className="cats">{countryMostBreeds}</span> have the highest
          number of cat breeds
        </p>
        <div>
          <h3>Countries with most breads</h3>
          <ol>
            {sortedCountries.map(country => (
              <li key={country}>{country}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
