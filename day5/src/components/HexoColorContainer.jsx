export default function HexoColorContainer({ color }) {
  return (
    <>
      <div className="hexacolor" style={{ backgroundColor: color }}>
        {color}
      </div>
    </>
  );
}
