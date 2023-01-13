import './styles.css';

export const SpecialsItem = (props) => {
  const { name, image, price, description } = props.item;

  return (
    <div className='specials-card'>
      <img src={image} alt={name} />
      <div className='specials-content'>
        <div className='specials-title flex'>
          <div className='specials-name'>{name}</div>
          <div className='specials-price'>${price}</div>
        </div>
        <div className='specials-description'>{description}</div>
        <div className='specials-order-link'>Order a delivery</div>
      </div>
    </div>
  );
};
