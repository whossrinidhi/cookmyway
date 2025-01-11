import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="flex flex-row bg-gray-400 h-14  justify-center">
      <div className="flex space-x-4 space-y-4 float-left">
        <ul className="flex space-x-16">
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
        <button className="bg-teal-600 hover:bg-teal-200 hover:text-black text-white font-bold py-2 px-4 rounded">
          Login
        </button>
        <button className="bg-teal-200 hover:bg-teal-600 hover:text-white text-black font-bold py-2 px-4 rounded">
          Signup
        </button>
      </div>
    </div>
  );
}
