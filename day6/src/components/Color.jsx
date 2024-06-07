export default function Color({ children, background }) {
  return (
    <div className="color-div" style={{ backgroundColor: background }}>
      {children}
    </div>
  );
}
