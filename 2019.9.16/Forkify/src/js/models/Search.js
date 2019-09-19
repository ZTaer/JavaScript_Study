/* 等待笔记

// 0. export default 导出单个数据
// export default '这是一个测试';

// 1. export导出多个数据方法
export const add = (a,b) => a+b;
export const ID = 7;

// 2. export导出class或者function或者对象
    // a) export导出class
    export default class Search{
        // 内容
    }
    // b) export导出function
    export const Search = () => {

    }

// 3. 注意模块文件的命名规则
    // 0. 模块文件开头大写
        // 如: Search.js
*/

// 4. 安装完axios后可直接调用
    // 0. axios比fetch更加优秀
    // 1. axios自动将json数据转换为对象类型
import axios from 'axios';
export default class Search {
    constructor( searchContact ){
        this.searchContact = searchContact;
    }

    async getSearchResult( searchContact = this.searchContact ){
        const apiPassword = '0360de105ebd1b22a33b1de1ee0e2f46';
        const cors = 'https://cors-anywhere.herokuapp.com/';
        try{
            const recipe = await axios(`${cors}https://www.food2fork.com/api/search?key=${apiPassword}&q=${searchContact}`);

            this.result = recipe.data.recipes;
            console.log(recipe);
            console.log(this.result);

        }catch(error){
            console.log(error);
        }
    }
}