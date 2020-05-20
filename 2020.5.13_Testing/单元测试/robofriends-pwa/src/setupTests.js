/**
 * enzyme: 初始化配置( 完成笔记 )
 */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });