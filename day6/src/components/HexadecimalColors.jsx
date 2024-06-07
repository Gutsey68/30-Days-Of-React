import Color from './Color';

export default function HexadecimalColors({ colors }) {
  const colorList = colors.map(color => {
    return (
      <Color background={color} key={color}>
        {color}
      </Color>
    );
  });
  return <div className="color-list">{colorList}</div>;
}
