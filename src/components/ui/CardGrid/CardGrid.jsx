import './CardGrid.css';

function CardGrid({ children, columns = 'three' }) {
  return (
    <div className={`cardGrid ${columns}-col`}>
      {children}
    </div>
  );
}

export default CardGrid;
