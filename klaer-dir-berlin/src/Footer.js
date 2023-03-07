import React, { useState } from 'react';

function Footer() {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  return (
    <div>
      <a onClick={handleClick}>Impressum</a>
      {showText && <p>Autor: Ahmad Fadhil</p>}
    </div>
  );
}

export default Footer;
