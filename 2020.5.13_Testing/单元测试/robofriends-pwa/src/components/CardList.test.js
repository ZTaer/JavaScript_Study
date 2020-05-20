/**
 * React组件测试( 完成笔记 )
 */
// 0. 模拟数据，保证组件正常测试 
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('test CardList', () => {
    // 模拟数据
    const mokesRobot = [ 
        {
            id: 1,
            name: 'ztaer',
            username: 'ztaerkiller',
            email: 'ztaerkiller@gmail.com'
        }
    ]
    expect( shallow( <CardList robots={mokesRobot} /> ) ).toMatchSnapshot(); 

});