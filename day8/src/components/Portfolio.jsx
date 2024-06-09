import React from 'react';
import Gauthier from '../assets/gauthier.png';

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstClass: 'portfolio-gauthier',
      ThirdClass: 'light'
    };
  }
  changeBackground = () => {
    const { FirstClass, ThirdClass } = this.state;
    if (FirstClass === 'portfolio-gauthier' && ThirdClass === 'light') {
      this.setState({
        FirstClass: 'dark-portfolio-gauthier',
        ThirdClass: 'dark-light'
      });
    } else {
      this.setState({
        FirstClass: 'portfolio-gauthier',
        ThirdClass: 'light'
      });
    }
  };
  render() {
    const { greetPeople, handleTime } = this.props;
    const { FirstClass, ThirdClass } = this.state;

    return (
      <>
        <div className="wrapper">
          <div className="wrap"></div>
        </div>
        <div className={FirstClass}>
          <div className="welcome">
            <h1>Welcome to 30 Days Of React</h1>
            <p>Getting Started React</p>
            <p>Javascript Library</p>
            <p>Gauthier Seyzeriat--Meyer</p>
            <p>Jun 9, 2024</p>
          </div>
          <hr className={ThirdClass} />
          <div className="gauthier">
            <div className="prerequisite">
              <p>Prerequisite to get started react.js</p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div className="photo">
              <img src={Gauthier} alt="" />
            </div>
            <div className="infos">
              <p>Gauthier Seyzeriat--Meyer</p>
              <div className="actions">
                <button onClick={greetPeople}>Greet People</button>
                <button onClick={handleTime}>Show Time</button>
                <button onClick={this.changeBackground}>
                  Change Background
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
