import { Component } from 'react';

class App extends Component {
  state = {
    top: 50,
    left: 100
  };
  handleMouseEnter = e => {
    console.log(this.state.top),
      this.setState({
        top: Math.floor(Math.random() * 101),
        left: Math.floor(Math.random() * 201)
      });
  };
  render() {
    return (
      <div className="relative">
        <div
          onMouseEnter={this.handleMouseEnter}
          style={{ top: `${this.state.top}%`, left: `${this.state.left}%` }}
          className="button"
        >
          Try to click me
        </div>
      </div>
    );
  }
}

export default App;
