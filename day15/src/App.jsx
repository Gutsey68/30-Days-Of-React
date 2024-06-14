import { TbPackages } from 'react-icons/tb';
import AxiosTest from './components/AxiosTest';
import ClassnamesExample from './components/ClassnamesExample';
import Form from './components/Form';
import MomentTest from './components/MomentTest';
import './styles/style.scss';

function App() {
  return (
    <div className="app">
      <h1>
        Third Paty Packages <TbPackages />
      </h1>
      <Form />
      <AxiosTest />
      <MomentTest />
      <ClassnamesExample />
    </div>
  );
}

export default App;
