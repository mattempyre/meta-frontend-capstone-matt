import './styles.css';

export const Button = ({ type, classes, handleClick, children }) => (
  <button
    className={`btn ${type} ${classes ? classes : ''}`}
    onClick={handleClick}
  >
    {children}
  </button>
);
