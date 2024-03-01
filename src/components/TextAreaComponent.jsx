export default function TextAreaComponent({
  name,
  value,
  onChange,
  output,
  isHidden,
}) {
  return (
    <div className="form-component">
      <label id={`${name}-label`} htmlFor={`${name}-textarea`}>
        {name}
      </label>
      <textarea
        id={`${name}-textarea`}
        className={isHidden ? "hidden" : ""}
        value={value}
        onChange={onChange}
        aria-labelledby={`${name}-textarea`}
      ></textarea>
      <p id={`${name}-output`}>{output}</p>
    </div>
  );
}
