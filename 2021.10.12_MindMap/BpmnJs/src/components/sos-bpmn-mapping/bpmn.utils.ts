import ZoomScrollModule from 'diagram-js/lib/navigation/zoomscroll/ZoomScroll';

/**
 * 保证: bpmn可以缩放画布( 等待笔记 )
 * 		a) 注意: 需要快捷键+鼠标滚轮才能配合缩放
 */
ZoomScrollModule.prototype.scroll = () => {}; // 空函数即可
export const handleUtilsBpmnScrollSize = {
	__init__: ['zoomScroll'],
	zoomScroll: ['type', ZoomScrollModule],
};
