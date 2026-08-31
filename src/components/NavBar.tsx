import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <header>
      <nav className="nav">
        <NavLink to="/" className="nav-link title">
          Bryan Cardeno
        </NavLink>
        <ul className="nav-menu">
          <NavLink className="nav-link" to="/">
            Lore
          </NavLink>
          <NavLink className="nav-link" to="/">
            Projects
          </NavLink>
          <NavLink className="nav-link" to="/">
            Skills
          </NavLink>
          <NavLink className="nav-link" to="/">
            Contact
          </NavLink>
          <NavLink className="nav-link" to="/">
            Resume
          </NavLink>
          <NavLink className="nav-link" to="/css-sandbox">
            Css Sandbox
          </NavLink>
          <NavLink className="nav-link" to="/math-window-page">
            Math Window Card
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
