
import logo from './logo.png'
// import { ImSearch } from 'react-icons/im';
import { Link } from 'react-router-dom'



import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
    
    <div className="logo">
    <Link to="/tvshows"> <img src={logo} alt="Logo"/></Link>
      <img src={logo} alt="Logo"/>
    </div>
    <div className="nav-links">
      <ul>
        <Link to="/tvshows">  <li>TV Shows</li></Link>
        <Link to='/tvshows'>  <li>Movies</li></Link>
        <Link to='/tvshows'>  <li>Recently Added</li></Link>
        {/* <li>TV Shows</li>
        <li>Movies</li> */}
        {/* <li>Recently Added</li>
        <li>My List</li> */}
      </ul>
    </div>
    <div className="search">
      Search
 {/* {ImSearch} */}
    </div>
    </nav>
  )
}

export default Navbar