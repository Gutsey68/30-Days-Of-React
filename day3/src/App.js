import './App.css';
import Skills from './Skills';
import Subscribe from './Subscribe';
import frontendTechs from './images/frontend_technologies.png';

function App() {
  return (
    <div className="App">
      <div>
        <img src={frontendTechs} alt="technologies front-end" />
        <Subscribe />
        <Skills />
      </div>
    </div>
  );
}

export default App;
