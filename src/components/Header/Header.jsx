import './Header.css';
import Text from '../ui/Text';
import NavLink from '../ui/NavLink';
import Badge from '../ui/Badge';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Text variant="heading1" as="h1">BODSPHERE</Text>
        <Text variant="tiny" color="muted">Your Fitness, Our Goal</Text>
      </div>
      <nav className="nav">
        <NavLink href="#" active>Home</NavLink>
        <NavLink href="#">Notification</NavLink>
        <NavLink href="#">Search</NavLink>
        <div className="notification-badge-wrapper">
          <Badge variant="notification">4</Badge>
        </div>
      </nav>
    </header>
  );
}

export default Header;
