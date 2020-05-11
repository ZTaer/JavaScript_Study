import Header from "../../components/header/header.component";
import TestImg from '../../components/test-img/test-img.component';
import _ from 'lodash'; // 只是做chunk实验

const header = new Header();
const testImg  = new TestImg();

header.render( _.upperFirst('proPages') );
testImg.render();