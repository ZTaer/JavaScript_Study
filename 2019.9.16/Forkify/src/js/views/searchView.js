import { element, elementString } from './base';



/** 显示搜索结果到UI
 * 
 */
const showRecipes = recipe => {
    const modelHtml = `
    <li>
        <a class="results__link" href="#${recipe.recipe_id}">
            <figure class="results__fig">
                <img src="${recipe.image_url}" alt="Test">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${recipe.title}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
    </li>
    `;
    element.resultsList.insertAdjacentHTML('beforeend',modelHtml);
}

/** 翻页
 *      要求: 
 *          0. 每页最大展示10个
 *          1. 当前页首页时: 只显示下一页按钮
 *          2. 当前页末页时: 只显示上一页按钮
 *          3. 当前页为中间页时: 显示二者按钮
 *          4. 由data-goto属性标记单击按钮的下一页
 *      
 *      思路:
 *          0. showResult() 决定渲染那些翻页按钮
 *              a) slice来分页,以及决定渲染那些元素
 *          1. 要有监听单击翻页按钮
 *              a) 监听到单击
 *              b) 清除当前按钮以及内容
 *              c) 渲染当前页按钮,以及相应内容
 */
// 渲染按钮HTML模板( 骚姿势 - 3元表达式书写HTML模板 )
export const pageHtml = ( page, type ) =>`
    <button class="btn-inline results__btn--${type}" data-goto=${ type == 'next' ? page + 1 : page - 1 } >
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${ type == 'next' ? 'right' : 'left' }"></use>
        </svg>
        <span>Page ${ type == 'next' ? page + 1 : page - 1 }</span>
    </button>
`;

// 逻辑决定渲染按钮
export const showPageButton = ( page, recipeNum, showRecipeNum ) => {
    const pages = recipeNum / showRecipeNum;
    const next = 'next',prev = 'prev';
    let result;
    
    if( page == 1 && pages > 1 ){
        // 只有下一页按钮
        result = pageHtml( page, next );
    }
    else if( page == pages && page > 1 ){
        // 只有上一页按钮
        result = pageHtml( page, prev );
    }
    else if( page > 1 && page < pages ){
        // 二个按钮都显示( 骚姿势 - 一次渲染二个HTML模板的 )      
        result = `
            ${ pageHtml( page, prev ) }
            ${ pageHtml( page, next ) }
        `;
    }
    element.searchPageButton.insertAdjacentHTML( 'afterbegin', result );
};

export const showResult = ( recipes, page = 1, showRecipeNum = 10 ) => {
    const start = (page - 1) * showRecipeNum;
    const end = start + showRecipeNum;

    let result = recipes.slice(start,end);
    result.forEach( showRecipes );

    showPageButton( page, recipes.length, showRecipeNum  );

}


/**
 * 选中按钮效果 
 */
export const clickItemsBg = (id = 0) => {
    let rlist = Array.from(document.querySelectorAll(`.${elementString.resultsLink}`)); 
    if( rlist.length !== 0 ){
        rlist.forEach( cur => {
            cur.classList.remove(`${elementString.resultsLinkActive}`);
        } );
        document.querySelector(`a[ href="#${id}" ]`).classList.add(`${elementString.resultsLinkActive}`);
    }

}


 
/** 界面初始化
 * 
 */
export const clearHtml = target => {
    document.querySelector( target ).innerHTML = '';
};

export const clearInput = target => {
    document.querySelector( target ).value = '';
};
