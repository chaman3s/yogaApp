import './Image.css';

function Image({ 
  src, 
  alt = '',
  variant = 'default',
  className = '',
  style = {},
}) {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={`image image-${variant} ${className}`}
      style={style}
    />
  );
}

export default Image;
