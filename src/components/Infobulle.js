import React, { useState } from 'react';
import { Tooltip } from 'react-tooltip'

function Infobulle({ imageUrl, texteInfoBulle }) {
  const [afficherInfoBulle, setAfficherInfoBulle] = useState(false);

  const styleInfoBulle = {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    padding: '8px',
    borderRadius: '4px',
    zIndex: 1,
    bottom: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    display: afficherInfoBulle ? 'block' : 'none',
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <img
        src={imageUrl}
        alt="Image avec info-bulle"
        onMouseEnter={() => setAfficherInfoBulle(true)}
        onMouseLeave={() => setAfficherInfoBulle(false)}
      />
      <div style={styleInfoBulle}>{texteInfoBulle}</div>
    </div>
  );
}

export default Infobulle;