// Importar imagens diretamente (Webpack as otimiza automaticamente)
import bethImage from '../assets/images/beth.png';
import rickImage from '../assets/images/rick.png';
import mortyImage from '../assets/images/morty.png';
import summerImage from '../assets/images/summer.png';
import roletaGif from '../assets/images/roleta.gif';
import apostaMaisGif from '../assets/images/apostamais.gif';
import apostaMenosGif from '../assets/images/apostamenos.gif';
import jogarGif from '../assets/images/jogar.gif';

// Configuração de caminhos de imagens
export const IMAGE_PATHS = {
  beth: bethImage,
  rick: rickImage,
  morty: mortyImage,
  summer: summerImage,
  roleta: roletaGif,
  apostaMais: apostaMaisGif,
  apostaMenos: apostaMenosGif,
  jogar: jogarGif,
};

export const CHARACTERS_IMAGES = {
  1: IMAGE_PATHS.beth,
  2: IMAGE_PATHS.rick,
  3: IMAGE_PATHS.morty,
  4: IMAGE_PATHS.summer,
};
