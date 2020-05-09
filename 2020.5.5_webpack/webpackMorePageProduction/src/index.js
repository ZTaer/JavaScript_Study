import TestButton from './components/test-button/test-button.component';
import Header from './components/header/header.component';
import TestImg from './components/test-img/test-img.component';
import hackImg from '../public/images/hack.jpg';
import _ from 'lodash'; // 只是用于做chunk实验

const testButton = new TestButton();
testButton.render();

const header = new Header();
header.render( _.upperFirst('index') ); // 开头大写

const testImg = new TestImg();
testImg.render('.img-test',hackImg);

if( process.env.NODE_ENV == 'production' ){
    console.log('production');
}
else if ( process.env.NODE_ENV == 'development' ) {
    console.log('development');
}
else{
    console.log('none');
}