/**
 * 测试具有Redux的Class组件( 完成笔记 )
 */
// 0. 容器模式: 将app.js改进为容器模式，只测试jsx组件部分
// 1. beforeEach: 准备wrapper以及组件需要"参数模拟"保证运行正常
    // a) jest.fn(): JEST模拟函数
// 2. 快照: 将jsx进行快照备份

import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

let wrapper;

// beforeEach: 在测试函数前运行, 为后续测试准备
beforeEach( ()=>{
    const mockProps = {
        onRequestRobots: jest.fn(),                 // JEST模拟函数( 完成笔记 )
        searchChange: '',
        isPending: false,
        robots: [],
    }
    wrapper = shallow(<App { ...mockProps } />);
} );

it('快照', () => {
    expect(wrapper).toMatchSnapshot();
});

// instance(): 获取class中的函数进行测试( 完成笔记 )
it('instance 测试class中的函数',()=>{
    expect( wrapper.instance().filteredRobots() ).toEqual([]);
});
