import { elementString,element } from './base';

// 切换喜欢按钮样式
export const toggleLikeIcon = door => {
    const string = door == true ?  'icon-heart' : 'icon-heart-outlined';
    // .setAttribute( '属性名称','属性值' )改变标签属性值( 完成笔记 )
    document.querySelector( `.recipe__love use` ).setAttribute('href',`img/icons.svg#${string}`);
}

// 隐藏/显示喜欢列表按钮
export const toggleLikeMenu = door => {
    //css3-visibility=""隐藏标签/显示标签属性,且依然占据空间
        // 0. visibility = "visible"; 显示标签
        // 1. visibility = "hidden"; 隐藏标签
    element.likesIcon.style.visibility = door > 0 ? 'visible' : 'hidden';
}

// 渲染喜欢列表内容
export const showLikeItem = likeItem => {
    const modelHTML = `
        <li>
            <a class="likes__link" href="#${likeItem.id}">
                <figure class="likes__fig">
                    <img src="${likeItem.img}" alt="Test">
                </figure>
                <div class="likes__data">
                    <h4 class="likes__name">
                        ${likeItem.title}
                    </h4>
                    <p class="likes__author">
                        ${likeItem.publisher}
                    </p>
                </div>
            </a>
        </li>
    `;

    element.likesList.insertAdjacentHTML('beforeend', modelHTML);
}

export const clearLikeItem = id => {
    // .class[href*="#test"]获取所有.class有此属性href="值"(完成笔记)
        // 0. 注意*=是指定所有的意思
    const tar = document.querySelector(`.${elementString.likesLink}[href*="#${id}"]`).parentNode;
    tar.parentNode.removeChild( tar );
}




