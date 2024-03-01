export default function Button({ className, text, type, onClick }) {
  return (
    <div className="btn-container">
      <button className={className} type={type} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
