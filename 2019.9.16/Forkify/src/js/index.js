/* 等待笔记
// 0. import 接受单个数据
// import test from './models/Search';

// 1. import 接受多个数据
    // a) 括号法: 注意变量名称要对应
        // as: 可以重命名变量名称
    import { add, ID as oo7 } from './models/Search';
    // b) 星号法: 接受全部返回值
        //  引用方式: 像对象一样引用如: Search.ID
    import * as Search from './models/Search';
    console.log(` ${Search.add(5,5)},${Search.ID} `);
*/

// API说明文档: https://www.food2fork.com/about/api
// API: 0360de105ebd1b22a33b1de1ee0e2f46


import axios from 'axios';

// 搜索功能
async function getSearchResult( contact ){
    const apiPassword = '0360de105ebd1b22a33b1de1ee0e2f46';
    const result = await axios(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${apiPassword}&q=${contact}`);

    const recipe = result.data.recipes;
    console.log(recipe);
}

getSearchResult('pizza');