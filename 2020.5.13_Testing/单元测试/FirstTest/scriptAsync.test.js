/**
 * Testing: 测试异步函数( 完成笔记 )
 */
const axios = require('axios');
const { getPeople } = require('./scriptAsync');

// 测试异步函数
    // a) 断言: expect.assertions( num )
        // 0. num数量与测试中存在的expect(xxx).xxx(xxx)数量有关系
    // a) 正常: 测试异步函数:
        // 0. done配合expect.assertions(1)
        // 1. return配合expect.assertions(1)
        // 2. done或者return有其中之一即可正常测试
    // b) 不正常: 测试异步函数
        // 0. expect.assertions(0)无论什么情况都将报错

it('test async done 函数', (done) => {
    expect.assertions(1); // 断言为0，无论什么情况将报错
    getPeople()
    .then( data => {
        expect( data.count ).toEqual(82);
        done();
    } );
});

it('test async 非done函数, return', () => {
    expect.assertions(2); // 断言为1，才能测试异步函数，否则将无法测试异步函数具体错误
    return getPeople()
    .then( data => {
        console.log(data.results.length);
        expect( data.count ).toEqual(82);
        expect( data.results.length ).toEqual(10);
    } );
});