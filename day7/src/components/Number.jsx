import React from 'react';

class Number extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className={this.props.background}>{this.props.children}</div>;
  }
}

export default Number;
