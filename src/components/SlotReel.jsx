import React from 'react';

export default function SlotReel({ id, imageSrc, image, isSpinning, spinning }) {
  const finalImage = imageSrc || image;
  const isSpin = isSpinning ?? spinning;
  
  return (
    <div id={`slot${id}`} className={`slot-reel ${isSpin ? 'spinning' : ''}`}>
      <img
        id={`escud${id}`}
        src={finalImage}
        alt={`Slot ${id}`}
      />
    </div>
  );
}
