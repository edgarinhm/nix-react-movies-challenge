import { FaSearch } from "react-icons/fa";
import "./search-box.css";

const SearchBox = ({ value = "", onChange, placeholder }) => {
  return (
    <form className="search-bar">
      <span>
        <FaSearch className="flip-icon" />
      </span>
      <input
        type="text"
        aria-label="search box"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder ?? ""}
      />
    </form>
  );
};

export default SearchBox;
