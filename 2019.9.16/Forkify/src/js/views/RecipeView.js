import { element, elementString } from './base';
import { Fraction } from 'fractional';

/**
 * 分数类型转化 
 */
const numFraction = num => {
    // 12 --> 12
    // 0.5 --> 1/2;
    // 1.5 --> 1 1/2;
    // frNum = new Fraction( num );( 完成笔记 )
        // 返回对象，分子，分母
        // frNum.numerator 获取分子
        // frNum.denominator 获取分母
    num = num.toString(10);
    if( num.includes('.') ){

        const [ int, dec ] = num.split('.');
        let frNum;

        if ( int == 0 ){
            frNum = new Fraction( parseFloat( num ).toFixed(2) );
            num = `${frNum.numerator} / ${frNum.denominator}`;
        }
        else{
            // 防无限循环小数写法
            frNum = new Fraction( parseFloat( ( dec * 10 ** (-dec.length) ).toFixed(2) )  );
            num = `${int} ${frNum.numerator} / ${frNum.denominator}`;
        }
    }

    return num;

} 

const recipeItems = (cur, index) => {
    let modelHTML = `
        <li class="recipe__item">
            <svg class="recipe__icon">
                <use href="img/icons.svg#icon-check"></use>
            </svg>
            <div class="recipe__count">${ numFraction(cur.num) }</div>
            <div class="recipe__ingredient">
                <span class="recipe__unit">${cur.unit}</span>
                ${cur.ingredients}
            </div>
        </li>
    `;
    return modelHTML;

}

export const showRecipe = ( data, toggleLikeIcon ) => {
    const string = toggleLikeIcon == true ? 'icon-heart' : 'icon-heart-outlined';
    let modelHTML = `
        <figure class="recipe__fig">
            <img src="${data.img}" alt="Tomato" class="recipe__img">
            <h1 class="recipe__title">
                <span>${data.title}</span>
            </h1>
        </figure>
        <div class="recipe__details">
            <div class="recipe__info">
                <svg class="recipe__info-icon">
                    <use href="img/icons.svg#icon-stopwatch"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--minutes">${data.cookTime}</span>
                <span class="recipe__info-text"> minutes</span>
            </div>
            <div class="recipe__info">
                <svg class="recipe__info-icon">
                    <use href="img/icons.svg#icon-man"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--people">${data.servings}</span>
                <span class="recipe__info-text"> servings</span>

                <div class="recipe__info-buttons">
                    <button class="btn-tiny btn-dec">
                        <svg>
                            <use href="img/icons.svg#icon-circle-with-minus"></use>
                        </svg>
                    </button>
                    <button class="btn-tiny btn-inc">
                        <svg>
                            <use href="img/icons.svg#icon-circle-with-plus"></use>
                        </svg>
                    </button>
                </div>

            </div>
            <button class="recipe__love">
                <svg class="header__likes">
                    <use href="img/icons.svg#${string}"></use>
                </svg>
            </button>
        </div>



        <div class="recipe__ingredients">
            <ul class="recipe__ingredient-list">
                ${ Array.from( data.ingredients ).map( recipeItems ).join('') }
                

            </ul>

            <button class="btn-small recipe__btn">
                <svg class="search__icon">
                    <use href="img/icons.svg#icon-shopping-cart"></use>
                </svg>
                <span>Add to shopping list</span>
            </button>
        </div>

        <div class="recipe__directions">
            <h2 class="heading-2">How to cook it</h2>
            <p class="recipe__directions-text">
                This recipe was carefully designed and tested by
                <span class="recipe__by">${data.publisher}</span>. Please check out directions at their website.
            </p>
            <a class="btn-small recipe__btn" href="${data.source}" target="_blank">
                <span>Directions</span>
                <svg class="search__icon">
                    <use href="img/icons.svg#icon-triangle-right"></use>
                </svg>

            </a>
        </div>
    `;
    element.recipe.insertAdjacentHTML('beforeend', modelHTML);
}

/**
 * 调整材料份数渲染
 */

export const showServings = recipe => {
    // 渲染人数
    document.querySelector( `.${elementString.recipeInfoDataPeole}` ).textContent = recipe.servings;

    // 渲染材料数
    Array.from(document.querySelectorAll(`.${elementString.recipeCount}`)).forEach( ( cur, index ) => {
        cur.textContent = numFraction(recipe.ingredients[index].num) ;
    } );
}
