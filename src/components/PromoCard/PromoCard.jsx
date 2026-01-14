import './PromoCard.css';
import Image from '../ui/Image';
import Text from '../ui/Text';
import Button from '../ui/Button';

function PromoCard({ image, title, highlightText, onButtonClick }) {
  return (
    <div className="promo-banner">
      <div className="promo-image">
        <Image src={image} alt="Promo" variant="cover" />
      </div>
      <div className="promo-content">
        <Text variant="body" color="light" className="promo-icon">
          🎓 Use Your Certificates &
        </Text>
        <Text variant="body" className="promo-text">
          {title} <span className="highlight">{highlightText}</span> for Free
        </Text>
        <Button variant="circular" onClick={onButtonClick}>{">"}</Button>
      </div>
    </div>
  );
}

export default PromoCard;
