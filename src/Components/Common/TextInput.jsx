export const TextInput = ({
  type,
  label,
  name,
  value,
  handleChange,
  ...rest
}) => {
  return (
    <div className='input-group'>
      <label htmlFor={name} className='input-label'>
        {label}
      </label>
      <input
        className='input-control'
        type={type}
        id={name}
        value={value}
        onChange={handleChange}
        {...rest}
      />
    </div>
  );
};
