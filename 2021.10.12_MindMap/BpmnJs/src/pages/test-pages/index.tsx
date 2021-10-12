import React from 'react';
import SosBpmnMapping from '../../components/sos-bpmn-mapping/index';
import './index.scss';

const TestPages = () => {
	return (
		<div className="test-pages">
			<h1>TEST_PAGES</h1>
			<h3>Bpmn-js初步实验</h3>
			<SosBpmnMapping />
		</div>
	);
};

export default TestPages;
