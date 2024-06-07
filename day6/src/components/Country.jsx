export default function Country({ country: { country, population } }) {
  let width = 1.25e-8 * population * 0.6;

  return (
    <div className="stat">
      <p>{country}</p>
      <div className="orange" style={{ width: `${width}%` }}></div>
      <p style={{ textAlign: 'right' }}>{population}</p>
    </div>
  );
}
