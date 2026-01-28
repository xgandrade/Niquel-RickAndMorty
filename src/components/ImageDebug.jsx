import React from 'react';
import { IMAGE_PATHS } from '../utils/imagePaths';

export function ImageDebug() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      <h3>Debug de Imagens</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
        <div>
          <p>Beth:</p>
          <img src={IMAGE_PATHS.beth} alt="Beth" style={{ maxWidth: '100px' }} />
        </div>
        <div>
          <p>Rick:</p>
          <img src={IMAGE_PATHS.rick} alt="Rick" style={{ maxWidth: '100px' }} />
        </div>
        <div>
          <p>Morty:</p>
          <img src={IMAGE_PATHS.morty} alt="Morty" style={{ maxWidth: '100px' }} />
        </div>
        <div>
          <p>Summer:</p>
          <img src={IMAGE_PATHS.summer} alt="Summer" style={{ maxWidth: '100px' }} />
        </div>
        <div>
          <p>Roleta GIF:</p>
          <img src={IMAGE_PATHS.roleta} alt="Roleta" style={{ maxWidth: '100px' }} />
        </div>
      </div>
    </div>
  );
}
