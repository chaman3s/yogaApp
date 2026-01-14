import './Nav.css';
import NavLink from '../ui/NavLink';
import Badge from '../ui/Badge';
import Image from '../ui/Image';
import companyLogo from "../../assets/logo/logo.png"
import { useState } from 'react';

function Nav() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="nav">
      <div className="logo">
        <Image variant="logo" src={companyLogo} alt="Bodsphere Logo" />
      </div>

      <nav className="nav-links">
        <NavLink 
          href="#" 
          active={activeTab === 0}
          onClick={() => setActiveTab(0)}
        >
          Home
        </NavLink>

        <NavLink 
          href="#" 
          active={activeTab === 1}
          onClick={() => setActiveTab(1)}
        >
          Notification
        </NavLink>

        <NavLink 
          href="#" 
          active={activeTab === 2}
          onClick={() => setActiveTab(2)}
        >
          Search
        </NavLink>

        <div className="notification-badge-wrapper">
          <Badge variant="notification">A</Badge>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
