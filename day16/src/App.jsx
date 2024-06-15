import React, { Component } from 'react';
import './styles/app.scss';

// Composant d'entrée de base
const Input = ({ inputType, ...props }) => {
  return <input type={inputType} {...props} />;
};

// HOC qui gère tous les types d'entrée
const withInputType = WrappedComponent => {
  return class extends Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

// Utiliser le HOC pour créer un nouveau composant
const EnhancedInput = withInputType(Input);

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Higher Order Component</h1>
        <EnhancedInput inputType="text" placeholder="Text input" />
        <EnhancedInput inputType="number" placeholder="Number input" />
        <EnhancedInput inputType="password" placeholder="Password input" />
        <EnhancedInput inputType="email" placeholder="Email input" />
        <EnhancedInput inputType="date" placeholder="Date input" />
      </div>
    );
  }
}

export default App;
