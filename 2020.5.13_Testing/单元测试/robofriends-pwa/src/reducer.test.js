/**
 * 测试Redux Reducer方法( 完成笔记 )
 */
// 0. 导入TYPE和Reducer函数
// 1. 构建reducer初始化值
// 2. 先测试主体reducer函数
// 3. 在测试reducer函数条件
    // a) 注意: action的对象类型{ type: 'XXX', payload: xxx } 

import * as TYPE from './constants';
import * as reducers from './reducers';

// 测试Reducer演示一
describe( '测试reducer - searchRobots部分', ()=>{
    // 初始化值    
    const initialStateSearch = {
        searchField: ''
    }

    // 测试主体函数( 使用测试函数的方法 )
    it('测试searchRobots主体函数',()=>{
        expect( reducers.searchRobots( undefined, {} ) ).toEqual( {searchField:''} );
    }); 

    // 测试条件( 使用测试函数的方法 )
        // a) 注意: action的对象类型{ type: 'XXX', payload: xxx }
    it('测试 - 处理CHANGE_SEARCHFIELD',()=>{
        expect( reducers.searchRobots(
            initialStateSearch,               // 初始值
            {                                 // action对象
                type: TYPE.CHANGE_SEARCHFIELD,
                payload: 'test' 
            } 
        )).toEqual(
            { searchField: 'test' }
        );
    })
    
} );


// 测试Reducer演示二
describe( '测试reducer - requestRobots部分', ()=>{
    // 初始化值    
    const initialStateRobots = {
        robots: [],
        isPending: true
    }

    // 测试主体函数( 使用测试函数的方法 )
    it('测试requestRobots主体函数',()=>{
        expect( reducers.requestRobots( undefined, {} ) ).toEqual({
            robots: [],
            isPending: true
        });
    }); 

    
    // 测试条件( 使用测试函数的方法 )
        // a) 注意: action的对象类型{ type: 'XXX', payload: xxx }
    it('测试 - 处理REQUEST_ROBOTS_PENDING',()=>{
        expect( reducers.requestRobots(
            initialStateRobots,
            {
                type: TYPE.REQUEST_ROBOTS_PENDING,
                payload: { isPending: true }
            }
        ) ).toEqual({
            robots: [],
            isPending: true           
        });
    })
    it('测试 - 处理REQUEST_ROBOTS_SUCCESS',()=>{
        expect( reducers.requestRobots(
            initialStateRobots,
            {
                type: TYPE.REQUEST_ROBOTS_SUCCESS,
                payload: [ 'success' ]
            }
        ) ).toEqual({
            robots: [ 'success' ],
            isPending: false           
        });
    })
    it('测试 - 处理REQUEST_ROBOTS_FAILED',()=>{
        expect( reducers.requestRobots(
            initialStateRobots,
            {
                type: TYPE.REQUEST_ROBOTS_FAILED,
                payload: '出现错误!!!'
            }
        ) ).toEqual({
            error: '出现错误!!!',
            isPending: true,  
            robots:[]
        });
    })
    
} );