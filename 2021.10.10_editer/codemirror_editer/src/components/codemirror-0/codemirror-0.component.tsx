import React, { useState } from 'react';
import { UnControlled as Codemirror } from 'react-codemirror2';
import { MainProps } from './index.model';

/**
 * Codemirror基本使用解析( 等待笔记 )
 */

// 基本样式
import 'codemirror/lib/codemirror.css';

// 渲染语言模式
//		a) 注意: 先查看'codemirror/mode/meta.js'确定语言所在文件类型位置
//		b) java: 'text/x-java' --> import 'codemirror/mode/click/click';
//		c) json: 'application/ld+json' --> import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/javascript/javascript';

// 皮肤
import './custom-theme-monaco-light.styles.css';

// 保证折叠正常
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/xml-fold';

const Codemirror0 = (props: MainProps) => {
	/**
	 * 变量区
	 */
	const { value = '' } = props;

	const [defaultData] = useState(value);
	const [valueData, setValueData] = useState('');

	/**
	 * 交互逻辑区
	 */
	const handleUiChangeValue = (_editer, _data, inputValue) => {
		try {
			setValueData(inputValue);
		} catch {
			console.warn('handleUiChangeValue error');
		}
	};

	console.log('valueData :>> ', valueData);

	return (
		<div className="codemirror-0">
			<Codemirror
				className="codemirror-0-core"
				value={defaultData}
				onChange={handleUiChangeValue}
				autoScroll={false}
				autoCursor={false}
				options={{
					mode: 'application/ld+json', // 语言模式
					theme: 'custom-theme-monaco-light', // 皮肤
					lineNumbers: true, // 左边代码行数
					lineWrapping: true, // 自动换行
					foldGutter: true, // 折叠
					gutters: [
						// 折叠
						'CodeMirror-linenumbers',
						'CodeMirror-foldgutter',
					],
				}}
			/>
		</div>
	);
};

export default Codemirror0;
