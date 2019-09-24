// API说明文档: https://www.food2fork.com/about/api
// API: 0360de105ebd1b22a33b1de1ee0e2f46

import Search from './models/Search';
import { element, elementString, showLoader, clearLoader } from './views/base';
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
        showLoader(`.${elementString.results}`);
        searchView.clearHtml(`.${elementString.resultsList}`);
        searchView.clearHtml(`.${elementString.resultsPages}`);

        // 3. 搜索结果,加入到 - 状态中
        await state.search.getSearchResult(query);

        // 4. UI初始化
        searchView.clearInput(`.${elementString.searchField}`);
        clearLoader( `.${elementString.results}` );
        // 5. 搜索结果显示到UI界面
        searchView.showResult( state.search.result ); // 注意class中保存的数据为this.result;所以要使用此方法来调出结果
    }
        
}

/** 监听区域
 * 
 */

element.search.addEventListener( 'submit', e => {
    e.preventDefault(); // 禁用按钮的默认效果
    controlSearch();

} );

element.resultPages.addEventListener( 'click', e => {
    // .closest()指定选择元素( 等待笔记 )
        // 0. .closest()符合抓取标签
            // 是: 返回标签
            // 否: 返回NULL
        // 1. 3种用法:
            // a) .closest( '元素名称' ): 指定抓取返回标签,否则返回Null
            // b) .closest( 'div' ): 默认多标签时抓最底层子类 
            // c) .closest( 'section > div' ): 会抓取最近子类div
            // d) .closest( ':not(div)' ): 不抓取div元素,抓取其它元素
    const btn = e.target.closest('.btn-inline');

    // .dataset用法,标签data属性读取
        // 注意: 返回值为"字符串格式"
        // 例: 
           // HTML: <a data-goto='1'></a>
           // JS: document.querySlector('a').dataset.goto; == '1';
        // 0. 其实.dataset将返回一个对象
            // a) 此时的goto为对象中的变量，
            // b) 索引.dataset.goto得到属性值
    if(btn){
        const page = parseInt( btn.dataset.goto,10 ) ;
        searchView.clearHtml(`.${elementString.resultsList}`);
        searchView.clearHtml(`.${elementString.resultsPages}`);
        searchView.showResult( state.search.result, page );
    }
} );