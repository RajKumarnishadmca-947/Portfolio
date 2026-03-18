import { NavLink } from "react-router-dom";
import "../Navbar/Nav.css";
const Nav = () => {
  return (
    <div className="navbar">
      <img src="/portfolio_logo-1.jpg" alt="Logo" className="logo" />
      <div className="menu">
        <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>About Me</NavLink>
        <NavLink to="/skills" className={({isActive}) => isActive ? "active" : ""}>Skills</NavLink>
        <NavLink to="/projects" className={({isActive}) => isActive ? "active" : ""}>Projects</NavLink>
        <NavLink to="/contact" className={({isActive}) => isActive ? "active" : ""}>Contact</NavLink>
        <NavLink to="/certification" className={({isActive}) => isActive ? "active" : ""}>Certifications</NavLink>
      </div>
    </div>
  );
};

export default Nav;