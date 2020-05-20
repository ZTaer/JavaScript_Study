/**
 * 测试Redux actions( 完成笔记 )
 */
// 0. 安装: yarn add redux-mock-store --dev 保证action中redux的异步函数测试正常
import * as actions from './actions';
import * as TYPE from './constants';

// 测试Redux actions: 配置redux-mock-store, 并使用redux-thunk()
import store from 'redux-mock-store';
import thunk from 'redux-thunk';
const mockStore = store([thunk]);       // 配置store

it('测试普通的action - 使用测试普通函数的方法',()=>{
    const text = '测试内容';
    const expectedAction = {
        type: TYPE.CHANGE_SEARCHFIELD,
        payload: text
    }
    expect( actions.setSearchField( text ) ).toEqual( expectedAction );
});

// 测试action中的thunk
it('测试thunk函数',()=>{
    const mockstore = mockStore();                  // 为了能正常使用dispatch()，需要初始化

    mockstore.dispatch( actions.requestRobots() );  // 测试运行thunk函数
    const action = mockstore.getActions();          // 获取执行的action类型

    const expectedAction = {                        // 期待的结果
        type: TYPE.REQUEST_ROBOTS_PENDING,
    }

    expect( action[0] ).toEqual(expectedAction);

});