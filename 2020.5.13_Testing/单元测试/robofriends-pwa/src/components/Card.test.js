/**
 * React组件测试 / 基础语法 / 组件快照备份( 完成笔记 )
 */
// 0. 命令 - 显示组件覆盖率测试图: yarn test -- --coverage
// 1. 无状态组件: 函数组件
// 2. shallow: 适合测试无状态组件,不过也可以测试class组件
// 3. toMatchSnapshot: 组件JSX快照备份
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Card from './Card';

it('test Card', () => {
    // toMatchSnapshot(): 快照备份组件
        // a) 备份后如果源组件JSX发生改动，那么将报错，( 注意: 组件的状态参数修改不会报错，因为只能备份JSX )
        // b) 目的: 用于监测组件是否发生变动,防止第三方开发者随意修改而不知
        // c) 更新快照: 如果确实想更改组件，则根据提示，按下"w" --> "u"更新
        // d) toMatchSnapshot与shallow配合使用
    expect( shallow( <Card /> ) ).toMatchSnapshot(); 
});