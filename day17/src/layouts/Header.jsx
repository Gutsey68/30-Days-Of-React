import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="container">
      <nav>
        <NavLink className="home" to="/">
          seyzeriat.com
        </NavLink>
        <div className="rightlink">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/resume">Résumé</NavLink>
        </div>
      </nav>
    </header>
  );
}
