import './Nav.css';
import NavLink from '../ui/NavLink';
import Badge from '../ui/Badge';
import Image from '../ui/Image';
import companyLogo from "../../assets/logo/logo.png"

function Nav() {
  return (
    <div className="nav">
      <div className="logo">
        <Image variant='logo' src={companyLogo} alt="Bodsphere Logo" />
      </div>
      <nav className="nav-links">
        <NavLink href="#" active>Home</NavLink>
        <NavLink href="#">Notification</NavLink>
        <NavLink href="#">Search</NavLink>
        <div className="notification-badge-wrapper">
          <Badge variant="notification">4</Badge>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
