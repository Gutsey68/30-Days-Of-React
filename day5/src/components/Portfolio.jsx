export default function Portfolio({
  image,
  name,
  location,
  skills,
  joinedDate
}) {
  const mapSkills = skills.map(skill => {
    return <span key={skill}>{skill}</span>;
  });

  return (
    <div className="portfolio">
      <img
        style={{ borderRadius: '50%' }}
        width="200px"
        src={image}
        alt={name}
      />
      <h2>{name} 🖖</h2>
      <h3>{location}</h3>
      <h4>SKILLS</h4>
      <div className="skills">
        <p>{mapSkills}</p>
      </div>
      <p>⏱️ Joined on {joinedDate}</p>
    </div>
  );
}
