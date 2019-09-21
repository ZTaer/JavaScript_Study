// API说明文档: https://www.food2fork.com/about/api
// API: 0360de105ebd1b22a33b1de1ee0e2f46

import Search from './models/Search';
import { element, elementString } from './views/base';
import * as searchView from './views/searchView';

/** 全局页面状态
 * - 搜索对象
 * - 当前食谱对象
 * - 购买列表对象
 * - 收藏对象
 */
const state = {};

const controlSearch = async () => {
    // 0. 获取搜索结果
    const query = element.query.value; 
    
    // 如果有结果:
    if( query ){
        // 1. 实例化搜索对象,加入 - 状态中
        state.search = new Search();

        // 2. 显示加载器到UI界面

        // 3. 搜索结果,加入到 - 状态中
        await state.search.getSearchResult(query);

        // 4. UI初始化
        searchView.clearHtml(`.${elementString.resultsList}`);
        searchView.clearInput(`.${elementString.searchField}`);

        // 5. 搜索结果显示到UI界面
        searchView.showResult( state.search.result ); // 注意class中保存的数据为this.result;所以要使用此方法来调出结果
    }
        
}

element.search.addEventListener( 'submit', e => {
    e.preventDefault(); // 禁用按钮的默认效果
    controlSearch();

} );
