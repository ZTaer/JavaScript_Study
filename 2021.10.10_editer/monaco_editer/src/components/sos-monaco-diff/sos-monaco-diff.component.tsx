import React from 'react';
import { DiffEditor, loader } from '@monaco-editor/react';
import { MainProps } from './index.model';

/**
 * 实验monaco ( 等待笔记 )
 * 		a) 安装:
 * 			0. yarn add @monaco-editor/react
 */

loader.config({
	// paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.28.1/min/vs' },
	paths: {
		vs: '/vs',
	},
});

const SosMonacoDiff = (props: MainProps) => {
	return (
		<div className="sos-monaco-diff">
			<DiffEditor
				original="a"
				modified="b"
				language="json"
				height="500px"
				theme="vs-dark"
			/>
		</div>
	);
};

export default SosMonacoDiff;
