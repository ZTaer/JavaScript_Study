/**
 * 监听并测试class组件和中的props以及state( 完成笔记 )
 */
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

it(' CounterButton to snapshot',()=>{
    // class组件快照备份
        // a) 注意: 根据组件需求，模拟数据
        // b) 模型: expect( shallow( JSX组件 ) ).toMatchSnapshot()
        // c) 记住: toMatchSnapshot只备份组件JSX部分，其它不备份，只有他备份的部分才在test下提示修改位置
    const mockColor = 'red';
    expect( shallow(<CounterButton color={mockColor} />) ).toMatchSnapshot();
});

it(' test CounterButton class ',()=>{
    const mockColor = 'red';
    const wrapper = shallow( <CounterButton color={mockColor} /> );
    
    // 模拟促发条件( 完成笔记 )
        // a) id: id为jsx组件中的id，方便find抓取指定组件
        // b) 抓取组件: 
            // 0. 获取组件: const xxx = shallow(JSX);
            // 1. 抓取组件ID: xxx.find("[id='yyy']");
                // a) 抓取组件后, 可以模拟事件，监听组件state/props值
                // b) state(): 监听组件的state值
                // c) props().xxx: 监听组件的props值
        // c) simulate(): 模拟促发条件
            // 0. simulate('click'): 模拟单击
            // 1. simulate('keypress'): 模拟按键
    wrapper.find("[id='counter']").simulate('click');   // 模拟单击
    wrapper.find("[id='counter']").simulate('click');   // 模拟单击
    expect(wrapper.state()).toEqual({ count: 3 });      // 监听获取"组件"中state值
    expect(wrapper.props().color).toEqual('red');       // 监听获取"组件"中props值
    wrapper.find("[id='counter']").simulate('keypress');// 模拟按键
    expect(wrapper.state()).toEqual({ count: 3 });      // 按键无变化

});