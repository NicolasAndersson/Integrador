import SearchBar from "../searchBar/SearchBar";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = ({ onSearch }) => {
  return (
    <div className={style.nav}>
      <SearchBar onSearch={onSearch} />

      <Link to="/home">
        <button>home</button>
      </Link>

      <Link to="/about">
        <button>about</button>
      </Link>

      <Link to="/favorites">
        <button>favorites</button>
      </Link>
    </div>
  );
};

export default NavBar;
