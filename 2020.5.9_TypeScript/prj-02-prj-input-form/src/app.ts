/* document.importNode复制目标( 完成笔记 ) */
// a) 参数: document.importNode( 抓取的目标.content, true/false是否复制子标签 );
// b) 下方以复制<template>中的标签为列
const targetPlace = <HTMLTemplateElement>document.querySelector("#project-input")!;  // 0. 抓取template标签      
const copyTarget = document.importNode( targetPlace.content, true );                 // 1. importNode复制抓取的template标签，注意.content
const targetContent = copyTarget.firstElementChild;                                  // 2. 去除template标签，留下子标签
console.log( targetContent );                                                      

