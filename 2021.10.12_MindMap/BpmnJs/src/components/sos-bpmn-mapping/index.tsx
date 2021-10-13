import React, { useEffect } from 'react';
import Modeler from 'bpmn-js/lib/Modeler';
import { MainProps } from './index.model';
import './index.scss';

const SosBpmnMaping = (props: MainProps) => {
	const modeler = new Modeler({
		container: '#canvas',
	});
	const handleUiRenderModeler = async () => {
		try {
			await modeler.importXML('');
		} catch {
			console.warn('handleUiRenderModeler error');
		}
	};

	useEffect(() => {
		handleUiRenderModeler();
	}, []);

	return (
		<div className="sos-bpmn-maping">
			<div id="canvas" />
		</div>
	);
};

export default SosBpmnMaping;
