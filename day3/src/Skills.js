import gaut from './images/IMG_1656.jpg';

export default function Skills() {
  const skills = ['HTML', 'CSS', 'Sass', 'Js', 'React', 'Node', 'MySql', 'Git'];

  const mapSkills = skills.map(skill => {
    return <span className="blue-span">{skill}</span>;
  });

  return (
    <div className="portfolio">
      <img src={gaut} alt="un bg" />
      <h2>Gauthier Seyzeriat--Meyer🖖</h2>
      <p>Web developer</p>
      <h2>Skills</h2>
      <p>{mapSkills}</p>
      <p>⏱️ Joined on Jun 02, 2024 </p>
    </div>
  );
}
