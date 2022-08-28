import Heading from './components/heading/heading';
import LassenImage from './components/lassen-image/lassen-image';
import _ from 'lodash';

const heading = new Heading();
heading.render(_.upperFirst('lassen'));
const lassenImage = new LassenImage();
lassenImage.render();