import HackImg from '../public/images/hack.jpg';

/**
 * JS创建标签
 * JS创建图片标签
 * appendChild(): 标签嵌入到指定标签内
 * ( 完成笔记 )
 */
export const addImgTest = () => {
    const img = document.createElement('img');      // 创建img标签
    img.src = HackImg;
    img.alt = 'test js import img';
    img.width = '300';
    const body = document.querySelector('body');    // 指定目标
    body.appendChild(img);                          // 目标.appendChild(标签): 嵌入到目标标签内
};