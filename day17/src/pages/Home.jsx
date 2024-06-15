import Gauthier from '../assets/gauthier.png';

export default function Home() {
  return (
    <div className="homepage container">
      <div className="flex">
        <div>
          <p>Gauthier Seyzeriat--Meyer</p>
          <h1>Web developer</h1>
          <p>
            I love coding with React , currently studying at CCI campus. Living
            in Colmar.
          </p>
        </div>
        <div>
          <img src={Gauthier} alt="" />
        </div>
      </div>
      <div className="flex">
        <p>I love working with</p>
      </div>
    </div>
  );
}
