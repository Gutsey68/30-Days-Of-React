import React from 'react';

class Color extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className="color-div"
        style={{ backgroundColor: this.props.background }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Color;
