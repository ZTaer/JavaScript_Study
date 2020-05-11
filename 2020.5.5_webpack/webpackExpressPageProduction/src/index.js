import TestButton from './components/test-button/test-button.component';
import Header from './components/header/header.component';
import TestImg from './components/test-img/test-img.component';
import hackImg from '../public/images/hack.jpg';
import _ from 'lodash'; // 只是用于做chunk实验

import "./index.scss";

/**
 * 使用BootStrap必备导入( 完成笔记 )
 */
import "bootstrap"; // 导入bootstrap的js
import "bootstrap/dist/css/bootstrap.min.css"; // 导入bootstrap的css

/**
 * 使用fontAwesome图标( 完成笔记 )
 */
// a) 安装：yarn add @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons --dev
// b) 导入：
import { library, dom } from '@fortawesome/fontawesome-svg-core'; // 核心
import { faSpinner, faAddressCard } from '@fortawesome/free-solid-svg-icons'; // 导出需要的图标名称, 基本图标
import { faAlipay } from '@fortawesome/free-brands-svg-icons'; // 导出需要的图标名称，品牌图标

// c) 导出的图标加入到library.add()中，并开启dom监控，即可在对应的html中使用图标
library.add(faSpinner, faAddressCard, faAlipay);
dom.watch();


const testButton = new TestButton();
testButton.render();

const header = new Header();
header.render( _.upperFirst('index-t') ); // 开头大写

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