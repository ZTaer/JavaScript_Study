import { hello } from './hello-word';
import { addImgTest } from './addImg';
import HelloButton from './components/hello-button/hello-button.component';
import SassButton from './components/sass-button/sass-button.component';
import Header from './components/header/header.component';

hello();
addImgTest();

// 原生JS创建的class组件渲染( 完成笔记 )
const helloButton = new HelloButton();
helloButton.render();

const sassButton = new SassButton();
sassButton.render();

const header = new Header();
header.render();
