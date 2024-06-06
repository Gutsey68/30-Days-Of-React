export default function Subscribe({
  title,
  description,
  placeholders,
  buttonText
}) {
  return (
    <div className="subscribe">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="input-field">
        <input type="text" placeholder={placeholders.firstName} />
        <input type="text" placeholder={placeholders.lastName} />
        <input type="text" placeholder={placeholders.email} />
      </div>
      <button>{buttonText}</button>
    </div>
  );
}
