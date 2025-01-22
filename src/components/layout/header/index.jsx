import { Link } from 'react-router-dom';
import './header.css'
import { FaSearch } from "react-icons/fa";


const Header = () => {
  return (
    <header className="header-top">
      <h2><Link to={'/'}>{'WOOKIES MOVIES'}</Link></h2>
      <div className='search-bar'>
        <span><FaSearch className='flip-icon'/></span>
        <input type="text" />
      </div>
    </header>
  )
}

export default Header