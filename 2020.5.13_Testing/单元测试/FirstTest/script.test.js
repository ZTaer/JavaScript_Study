/**
 * Testing( 完成笔记 )
 */
// 0. describe测试分组备注, 大标题
// 1. it测试分组备注, 小标题
// 2. expect.tobe测试期待值
// 3. expect.toEqual测试期待值/数组/对象

 // describe测试分组,方便查看
 describe( '测试分组，当前测试google函数', () => {
    const googleSearch = require('./script');
    const googleDatabase = [
        'cats.com',
        'pornhub.com',
        'baidu.com',
        'morecats.com',
        'oo7.fun',
        'onecats.com',
        'earthlees.com',
        'nocats.com'
    ];

    it( '基本测试', () => {
        // 测试函数
        console.log(googleSearch('test',googleDatabase));
        
        // expect.toBe测试期待值
        expect('hello').toBe('hello');
    } )

    it( '测试expect', () => {
        // expect.toEqual测试期待数组/对象/值 
        expect(googleSearch('test',googleDatabase)).toEqual([]);
        expect(googleSearch(null,googleDatabase)).toEqual([]);
        expect(googleSearch(undefined,googleDatabase)).toEqual([]);
        expect(googleSearch('lee',googleDatabase)).toEqual(['earthlees.com']);
    } )

    it( '测试结果数量', () => {
        expect( googleSearch('.com',googleDatabase).length ).toEqual(3);
    } )
} );
