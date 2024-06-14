import classNames from 'classnames';
import React, { useState } from 'react';

export default function ClassnamesExample() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const buttonClass = classNames({
    btn: true,
    'btn-active': isActive,
    'btn-inactive': !isActive
  });

  return (
    <div>
      <button className={buttonClass} onClick={handleToggle}>
        Toggle Class
      </button>
    </div>
  );
}
