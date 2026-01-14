import './NavLink.css';

function NavLink({ href, children, active = false, className = '' }) {
  return (
    <a 
      href={href} 
      className={`nav-link ${active ? 'active' : ''} ${className}`}
    >
      {children}
    </a>
  );
}

export default NavLink;
