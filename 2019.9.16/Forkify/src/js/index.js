// API说明文档: https://www.food2fork.com/about/api
// API: 0360de105ebd1b22a33b1de1ee0e2f46

import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import { element, elementString, showLoader, clearLoader, pubClearHtml, pubClearInput } from './views/base';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';

/** 全局页面状态
 * - 搜索对象
 * - 当前食谱对象
 * - 购买列表对象
 * - 收藏对象
 */
const state = {};

/** 
 * 搜索栏监听区域
 */
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

        try{
            // 3. 搜索结果,加入到 - 状态中
            await state.search.getSearchResult(query);
    
            // 4. UI初始化
            searchView.clearInput(`.${elementString.searchField}`);
            clearLoader( `.${elementString.results}` );
            // 5. 搜索结果显示到UI界面
            searchView.showResult( state.search.result ); // 注意class中保存的数据为this.result;所以要使用此方法来调出结果

        }catch( error ){
            console.log( error );
        }
    }
        
}



element.search.addEventListener( 'submit', e => {
    e.preventDefault(); // 禁用按钮的默认效果
    controlSearch();

} );

element.resultPages.addEventListener( 'click', e => {
    // .closest()指定选择元素( 完成笔记 )
        // 0. .closest()符合抓取标签
            // 是: 返回标签
            // 否: 返回NULL
        // 1. 3种用法:
            // a) .closest( '元素名称' ): 指定抓取返回标签,否则返回Null
            // b) .closest( 'div' ): 默认多标签时抓最底层子类 
            // c) .closest( 'section > div' ): 会抓取最近子类div
            // d) .closest( ':not(div)' ): 不抓取div元素,抓取其它元素
        // 2. 通常与document.querySelector('xxx').closest('yyy');来合作抓取指定标签
    const btn = e.target.closest('.btn-inline');

    // .dataset用法,标签data属性读取( 完成笔记 )
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

/**
 * 监听获取ID数据区域
 */
const controlRecipe = async () => {
    // window.location.hash 获取URL改变的HASH值( 完成笔记 )
    const id = window.location.hash.replace('#','');
    if(id){
        try{
            // 0. 清除原HTML模板; 模块class加入状态方便调用
            state.recipe = new Recipe();
            pubClearHtml(`.${elementString.recipe}`);
            searchView.clickItemsBg(id);
            // 1. 加载器
            showLoader(`.${elementString.recipe}`);

            // 2. 获取ID数据
            await state.recipe.getIdRecipe( id );
            state.recipe.calcCookTime();
            state.recipe.calcServings();
            state.recipe.processIngredients();

            // 3. 清除加载器
            clearLoader(`.${elementString.recipe}`);

            // 4. 渲染HTML数据
            recipeView.showRecipe( state.recipe );
            console.log(state.recipe);
            
        }catch( error )
        {
            console.log( error );
        }
    }
}

// window.addEventListener( 'hashchange',function ); 监听URL改变触发函数( 完成笔记 )
// window.addEventListener( 'load',function ); 网页加载时触发函数( 完成笔记 )
// ['hashchange','load'].forEach( e => window.addEventListener( e, controlRecipe ) );
['hashchange'].forEach( e => window.addEventListener( e, controlRecipe ) );

/**
 *  调整所需材料份数
 */

 // .matches( css选择 )判断是否为指定的CSS选择标签, 返回True/False( 等待笔记 )
    // a) 可使用css多选如: el.traget.matches( ' btn-dec, btn-dec * ' )
    // b) '.btn-dec *': 的意思为选中所有子类标签
element.recipe.addEventListener( 'click', cur => {
    if (cur.target.matches(' .btn-dec, .btn-dec * ') ){
        state.recipe.reviseServings( 'dec' );
        recipeView.showServings( state.recipe );
    }
    else if( cur.target.matches(' .btn-inc, .btn-inc * ' ) ){
        state.recipe.reviseServings( 'inc' );
        recipeView.showServings( state.recipe );
    } 
    else if( cur.target.matches( '.recipe__btn, .recipe__btn *' ) ){
        // 购物车的数据加入全局状态
        if( !state.list ) state.list = new List();
        console.log(state.recipe.ingredients);
        const items = state.recipe.ingredients;
        items.forEach( cur => state.list.addItem( cur.num, cur.unit, cur.ingredients ) );

        // 渲染材料到购物车
        listView.showList( state.list.items );
    }
} );

/**
 * 购物车操控
 */
const reviseList = cur => {
    const id = cur.target.closest(`.${elementString.shoppingItem}`).dataset.itemid;

    // 删除按钮
    if( cur.target.matches( ` .${elementString.shoppingDelete}, .${elementString.shoppingDelete} * ` ) ){
        state.list.deleteItem( id );
        listView.clearListItem( id );
    }
    else if( cur.target.matches( ` .${elementString.shoppingCountValue}` ) ){
        const newNum = parseFloat(cur.target.value);
        if( newNum < 0 ) listView.showNum( id, 0 ); // 保证数量不小于0
        state.list.updateNewNum( id, newNum );
    }
    console.log( state.list );

}

element.shoppingList.addEventListener( 'click',reviseList );