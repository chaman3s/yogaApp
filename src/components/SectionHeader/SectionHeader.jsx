import './SectionHeader.css';
import Text from '../ui/Text';

function SectionHeader({ title, actionText = 'See more', onActionClick }) {
  return (
    <div className="section-header">
      <Text variant="heading2" as="h2">{title}</Text>
      <a href="#" className="see-more" onClick={onActionClick}>
        {actionText}
      </a>
    </div>
  );
}

export default SectionHeader;
