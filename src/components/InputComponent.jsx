export default function InputComponent({
  name,
  type,
  value,
  onChange,
  output,
  isHidden,
}) {
  return (
    <div className="form-component">
      <label id={`${name}-label`} htmlFor={`${name}-input`}>
        {name}
      </label>
      <input
        id={`${name}-input`}
        className={isHidden ? "hidden" : ""}
        type={type}
        value={value}
        onChange={onChange}
        aria-labelledby={`${name}-input`}
      ></input>
      <p id={`${name}-output`}>{output}</p>
    </div>
  );
}
