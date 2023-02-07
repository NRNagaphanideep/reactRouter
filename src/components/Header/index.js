// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="logo-title-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        className="nav-image"
        alt="wave"
      />
      <h1 className="title">Wave</h1>
    </div>
    <ul className="nav-menu">
      <li className="link-item">
        <Link className="nav-heading" to="/">
          Home
        </Link>
      </li>
      <li className="link-item">
        <Link className="nav-heading" to="/about">
          About
        </Link>
      </li>
      <li className="link-item">
        <Link className="nav-heading" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
