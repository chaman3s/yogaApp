import './Button.css';

function Button({ children, variant = 'default', onClick, className = '', style = {} }) {
  return (
    <button 
      className={`btn btn-${variant} ${className}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
}

export default Button;
