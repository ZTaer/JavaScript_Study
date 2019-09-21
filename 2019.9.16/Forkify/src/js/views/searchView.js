import { element, elementString } from './base';

/** 显示搜索结果到UI
 * 
 */
const showRecipes = recipe => {
    const modelHtml = `
    <li>
        <a class="results__link results__link--active" href="#${recipe.recipe_id}">
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

export const showResult = recipes => {
    recipes.forEach( showRecipes );
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