import React, { useEffect } from 'react';

/**
 * 基本的Bpmn预览模式使用( 等待笔记 )
 * 		a) 安装: yarn add bpmn-js diagram-js diagram-js-minimap
 */
import BpmnViewer from 'bpmn-js/lib/Viewer';
import ModelingModule from 'bpmn-js/lib/features/modeling';
import MoveCanvasModule from 'diagram-js/lib/navigation/movecanvas';
import MinimapModule from 'diagram-js-minimap';

import { handleUtilsBpmnScrollSize } from './bpmn.utils';
import { MainProps } from './index.model';
import { mockData } from './bpmn-mock-data';

import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';
import 'diagram-js-minimap/assets/diagram-js-minimap.css';
import './index.scss';

const SosBpmnMaping = (props: MainProps) => {
	// 清除水印
	const handleUiClearLogo = () => {
		try {
			const target = document.querySelector('.bjs-powered-by');
			target.textContent = '';
		} catch {
			console.warn('handleUiClearLogo error');
		}
	};

	// 初始化bpmn
	const handleUiInitBpmn = () => {
		try {
			const bpmnRenderDom = document.querySelector('#bpmnRenderCore');
			const modeler = new BpmnViewer({
				container: bpmnRenderDom,
				height: 500,
				Keyboard: {
					bindTo: document,
				},
				additionalModules: [
					ModelingModule, // 基础配置, 移动画布, 修改颜色, 需要依赖
					handleUtilsBpmnScrollSize, // 缩放画布
					MoveCanvasModule, // 移动整个画布
					MinimapModule, // miniMap
				],
			});

			// 清除水印
			handleUiClearLogo();

			return modeler;
		} catch {
			console.warn('handleUiInitBpmn error');
			return null;
		}
	};

	// 渲染bpmn
	const handleUiRenderModeler = async (modeler) => {
		try {
			if (modeler) {
				const msg = await modeler.importXML(mockData); // 导入图
				modeler.get('canvas').zoom('fit-viewport'); // 保证图
				modeler.get('minimap').open(); // 打开miniMap
				console.warn('BpmnRenderMsg', msg);
			}
		} catch {
			console.warn('handleUiRenderModeler error');
		}
	};

	// 监听bpmn交互
	const handleUiOnActive = (modeler) => {
		try {
			modeler.on('element.click', (e) => console.log('e', e));
		} catch {
			console.warn('handleUiOnActive error');
		}
	};

	useEffect(() => {
		const Modeler = handleUiInitBpmn();
		handleUiRenderModeler(Modeler);
		handleUiOnActive(Modeler);

		return () => {
			Modeler.destroy(); // 卸载bpmn组件
		};
	}, []);

	return (
		<div
			className="sos-bpmn-maping"
			style={{ border: '1px solid #000', margin: '1rem' }}
		>
			<div id="bpmnRenderCore" />
		</div>
	);
};

export default SosBpmnMaping;
