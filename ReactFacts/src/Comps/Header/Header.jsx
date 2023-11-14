import logo from './logo.png'
import './Header.css'

console.log(logo);
const Header = () => {
  return (
    <nav className="header">
<img src={logo} alt="" />
    </nav>
  )
}

export default Header

    