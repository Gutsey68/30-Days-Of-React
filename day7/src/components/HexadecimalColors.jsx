import React from 'react';
import Color from './Color';

class HexadecimalColors extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const colorList = this.props.colors.map(color => {
      return (
        <Color background={color} key={color}>
          {color}
        </Color>
      );
    });
    return <div className="color-list">{colorList}</div>;
  }
}

export default HexadecimalColors;
