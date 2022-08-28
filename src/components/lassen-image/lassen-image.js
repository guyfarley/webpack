import Lassen from './lassen-image.jpg';
import './lassen-image.scss';

class LassenImage {
  render() {
    const img = document.createElement('img');
    img.src = Lassen;
    img.alt = 'Lassen';
    img.classList.add('lassen-image');

    const bodyDomElement = document.querySelector('body');
    bodyDomElement.appendChild(img);
  }
}

export default LassenImage;