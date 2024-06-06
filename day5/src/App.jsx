import gauthier from './assets/gauthier.png';
import FrontEndTechs from './components/FrontEndTechs';
import HexoColorContainer from './components/HexoColorContainer';
import Portfolio from './components/Portfolio';
import Subscribe from './components/Subscribe';

const showDate = time => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const month = months[time.getMonth()].slice(0, 3);
  const year = time.getFullYear();
  const date = time.getDate();
  return ` ${month} ${date}, ${year}`;
};

const skills = [
  'Html',
  'Css',
  'Sass',
  'TailwindCss',
  'Javascript',
  'Php',
  'React',
  'Mysql'
];

const placeholders = {
  firstName: 'First name',
  lastName: 'Last name',
  email: 'Email'
};

const hexaColor = () => {
  let str = '0123456789abcdef';
  let color = '';
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return '#' + color;
};

const App = () => (
  <div className="app">
    <FrontEndTechs />
    <Subscribe
      title="SUBSCRIBE"
      description="Sign up with your email address to receive news and updates"
      placeholders={placeholders}
      buttonText="Subscribe"
    />
    <HexoColorContainer color={hexaColor()} />
    <HexoColorContainer color={hexaColor()} />
    <HexoColorContainer color={hexaColor()} />
    <HexoColorContainer color={hexaColor()} />
    <HexoColorContainer color={hexaColor()} />
    <Portfolio
      image={gauthier}
      name="Gauthier Seyzeriat--Meyer"
      location="Web developer in Colmar"
      skills={skills}
      joinedDate={showDate(new Date())}
    />
  </div>
);

export default App;
