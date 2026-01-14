import './Card.css';
import Image from '../Image';
import Text from '../Text';
import Badge from '../Badge';

function Card({ 
  image,
  title,
  subtitle,
  isPro = false,
  onClick,
  className = '',
  style = {},
  children,
}) {
  return (
    <div className={`card ${className}`} onClick={onClick} style={style}>
      {image && (
        <div className="card-image">
          <Image src={image} alt={title} />
          {isPro && <Badge variant="pro" className="pro-badge">PRO</Badge>}
        </div>
      )}
      {(title || subtitle || children) && (
        <div className="card-content">
          {title && <Text variant="cardTitle" className="card-title">{title}</Text>}
          {subtitle && <Text variant="cardSubtitle" color="muted" className="card-subtitle">{subtitle}</Text>}
          {children}
        </div>
      )}
    </div>
  );
}

export default Card;
