import React from 'react';

export function SlotReel({ id, imageSrc, isSpinning }) {
  return (
    <div id={`slot${id}`} className="slot-reel">
      <img
        id={`escud${id}`}
        src={imageSrc}
        alt={`Slot ${id}`}
        className={isSpinning ? 'spinning' : ''}
      />
    </div>
  );
}
