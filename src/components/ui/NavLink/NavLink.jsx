import './NavLink.css';

function NavLink({ href, children, active = false, className = '', onClick }) {
  return (
    <a 
      href={href}
      onClick={onClick}
      className={`nav-link ${active ? 'active' : ''} ${className}`}
    >
      {children}
    </a>
  );
}

export default NavLink;
