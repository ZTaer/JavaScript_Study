export const elementString = {
    resultsList: 'results__list',
    searchField: 'search__field',
    loader: 'loader',
    results: 'results',
    btnInline: 'btn-inline',
    resultsPages: 'results__pages',
};

export const element = {
    search: document.querySelector('.search'),
    query: document.querySelector('.search__field'),
    resultsList: document.querySelector('.results__list'),
    loader: document.querySelector('.loader'),
    searchPageButton: document.querySelector('.results__pages'),
    resultPages: document.querySelector('.results__pages'),
};

/** 加载器动画
*  0. div中写入 .loader 中svg可执行旋转动画如:
* <div class="loader">
       <svg>
           <use href="img/icons.svg#icon-cw"></use>
       </svg>
   </div>
*/
export const showLoader = target => {
    const loaderHtml = `
    <div class="${elementString.loader}">
        <svg>
            <use href="./img/icons.svg#icon-cw"></use>
        </svg>
    </div>
    `;
    document.querySelector(target).insertAdjacentHTML('afterbegin',loaderHtml);
};

export const clearLoader = target => {
    const loader = document.querySelector(`${target} .${elementString.loader}`);
    if( loader ) loader.parentNode.removeChild( loader ); 
};