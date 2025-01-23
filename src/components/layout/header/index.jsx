import { Link } from "react-router-dom";
import "./header.css";
import SearchBox from "../../../common/components/search-box";
import useSharedStorage from "../../../common/state-management/shared-storage";

const Header = () => {
  const { searchQuery, setSearchQuery } = useSharedStorage();
  return (
    <header className="header-top">
      <h2>
        <Link to={"/"}>{"WOOKIES MOVIES"}</Link>
      </h2>
      <SearchBox value={searchQuery} onChange={setSearchQuery} />
    </header>
  );
};

export default Header;
