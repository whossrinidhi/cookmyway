import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <ul className="navbar">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/saved">Saved</NavLink>
        </li>
        <li>
          <NavLink to="/plan">Plan</NavLink>
        </li>
      </ul>
    </div>
  );
}
