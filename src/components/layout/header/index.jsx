import './header.css'
import { FaSearch } from "react-icons/fa";


const Header = () => {
  return (
    <header className="header-top">
      <h2>{'WOOKIES MOVIES'}</h2>
      <div className='search-bar'>
        <span><FaSearch className='flip-icon'/></span>
        <input type="text" />
      </div>
    </header>
  )
}

export default Header