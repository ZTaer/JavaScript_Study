import { element, elementString } from './base';

export const showList = ( items ) => {
    // map()配合join能轻松将数据转换多个HTML模板( 等待笔记 )
    // number类型的input表单，step属性可以控制表单的单次加减数
    const modelHTML = items.map( cur => {
        cur = `
            <li class="shopping__item" data-itemid="${ cur.id }" >
                <div class="shopping__count">
                    <input class="shopping__count-value" type="number" value="${cur.num}" step="${cur.num}">
                    <p>${cur.unit}</p>
                </div>
                <p class="shopping__description">${cur.ingredients}</p>
                <button class="shopping__delete btn-tiny">
                    <svg>
                        <use href="img/icons.svg#icon-circle-with-cross"></use>
                    </svg>
                </button>
            </li>
        `;

        // 别忘记map必须要有return才能返回值
        return cur;
    } );
    element.shoppingList.insertAdjacentHTML('beforeend', modelHTML.join('') );
};

export const clearListItem = ( id ) => {
    const tar = document.querySelector( `[data-itemid="${id}"]` );
    tar.parentNode.removeChild( tar );
};

export const showNum = ( id, num ) => {
    let tar = document.querySelector( `[data-itemid="${id}"] .${elementString.shoppingCountValue}` );
    tar.value = num;
};