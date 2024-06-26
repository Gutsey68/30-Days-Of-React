const hexaColor = () => {
  let str = '0123456789abcdef';
  let color = '';
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return '#' + color;
};

export default function HexoColorContainer() {
  const hexaColoro = hexaColor();
  return (
    <div className="hexacolor" style={{ backgroundColor: hexaColoro }}>
      {hexaColoro}
    </div>
  );
}
