import React from 'react';
import SosMonacoEditer from '../../components/sos-monaco-editer/index';
import SosMonacoDiff from '../../components/sos-monaco-diff';
import './index.scss';

const TestPages = () => {
	return (
		<div className="test-pages">
			<h1>TEST_PAGES</h1>
			<h3>0 - Monaco初步实验</h3>
			<SosMonacoEditer />
			<h3>1 - Monaco Diff实验</h3>
			<SosMonacoDiff />
		</div>
	);
};

export default TestPages;
