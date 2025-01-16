import './Navbar.css';

//2 - Links com React Router
import { NavLink } from "react-router-dom";

const Navbar = () => {
   return (
      <nav>
         {/* <Link to="/">Home</Link>
         <Link to="/sobre">Sobre</Link> */}
         <NavLink to="/">Home</NavLink>
         <NavLink to="/sobre">Sobre</NavLink>
      </nav>
   )
}

export default Navbar;