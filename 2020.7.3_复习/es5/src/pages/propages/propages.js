import TestImg from '../../components/test-img/test-img.component';
import df from '../../../public/images/default.jpg';
import "../../assets/hash"; // 使用: 监听html文件hash保证浏览器刷新( 完成笔记 )

const testImg = new TestImg();
testImg.render( 'body',df );