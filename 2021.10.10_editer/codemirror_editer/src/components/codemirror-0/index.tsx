import React from 'react';
import Codemirror0Core from './codemirror-0.component';
import { MainProps } from './index.model';
import { handleUtilsCpuJsonBeautify } from './index.utils';

import './index.scss';

const Codemirror0 = (props: MainProps) => {
	const { value = '', lang = 'json', ...otherProps } = props;

	/**
	 * 运算逻辑区
	 */
	// 数据拦截: 标准化数据输入
	const handleCpuValueInput = (data, type) => {
		try {
			let result: string | any = '';

			if (type === 'json') {
				result = handleUtilsCpuJsonBeautify(data);
			}

			console.log('cpu :>> ', result);
			return result;
		} catch {
			console.warn('handleCpuValueInput error');
			return '';
		}
	};

	console.log('props :>> ', props);

	return (
		<Codemirror0Core
			lang={lang}
			value={handleCpuValueInput(value, lang)}
			{...otherProps}
		/>
	);
};

export default Codemirror0;
