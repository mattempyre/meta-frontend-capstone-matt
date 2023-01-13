export const SelectInput = ({
  options,
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
      <select
        className='input-control'
        id={name}
        value={value}
        onChange={handleChange}
        {...rest}
      >
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
