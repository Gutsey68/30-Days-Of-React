import gauthier from '../assets/gauthier.png';

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

const mapSkills = skills.map(skill => {
  return <span key={skill}>{skill}</span>;
});

export default function Portfolio() {
  return (
    <div className="portfolio">
      <img
        style={{ borderRadius: '50%' }}
        width="200px"
        src={gauthier}
        alt=""
      />
      <h2>Gauthier Seyzeriat--Meyer 🖖</h2>
      <h3>Web developer in Colmar</h3>
      <h4>SKILLS</h4>
      <div className="skills">
        <p>{mapSkills}</p>
      </div>
      <p>⏱️ Joined on 02/06/2024</p>
    </div>
  );
}
