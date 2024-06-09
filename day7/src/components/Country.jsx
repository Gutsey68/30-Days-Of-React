import React from 'react';

class Country extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, population } = this.props.country;
    let width = 1.25e-8 * population * 0.6;
    return (
      <div className="stat">
        <p>{name}</p>
        <div className="orange" style={{ width: `${width}%` }}></div>
        <p style={{ textAlign: 'right' }}>{population}</p>
      </div>
    );
  }
}

export default Country;
