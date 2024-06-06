import { FaCss3Alt, FaHtml5, FaReact } from 'react-icons/fa';
import { TbBrandJavascript } from 'react-icons/tb';

export default function FrontEndTechs() {
  return (
    <div className="front-end">
      <h1>Frond End Technologies</h1>
      <div className="icons">
        {' '}
        <FaHtml5 className="html" />
        <FaCss3Alt className="css" />
        <TbBrandJavascript className="javascript" />
        <FaReact className="react" />
      </div>
    </div>
  );
}
