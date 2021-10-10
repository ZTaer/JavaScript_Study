import React, { useState } from 'react';
import { Controlled as Codemirror } from 'react-codemirror2';
import { MainProps } from './index.model';

// 基本样式
import 'codemirror/lib/codemirror.css';

// 渲染语言模式
import 'codemirror/mode/javascript/javascript';

// 皮肤
import 'codemirror/theme/mdn-like.css';

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
	const handleUiChangeValue = (data, _update) => {
		try {
			setValueData(data);
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
				onChange={(...e) => console.log('e :>> ', e)}
				onBeforeChange={(...e) => console.log('e-before :>> ', e)}
				autoScroll={false}
				autoCursor={false}
				options={{
					mode: 'application/ld+json',
					lineNumbers: true,
					theme: 'mdn-like',
					lineWrapping: true,
					foldGutter: true,
					gutters: [
						'CodeMirror-linenumbers',
						'CodeMirror-foldgutter',
					],
				}}
			/>
		</div>
	);
};

export default Codemirror0;
