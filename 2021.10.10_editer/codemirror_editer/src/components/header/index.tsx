import React, { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const Header = (props: any) => {
	/**
	 * 变量区
	 */
	const [tabValue, setTabValue] = useState('/');
	const { history } = props;

	/**
	 * 交互逻辑区
	 */
	const handleUiChangeTab = (_event, newValue) => {
		try {
			setTabValue(newValue);
			history.push(newValue);
		} catch {
			console.warn('handleUiChangeTab error');
		}
	};

	return (
		<div className="header">
			<Tabs
				variant="scrollable"
				scrollButtons="auto"
				aria-label="header use router"
				onChange={handleUiChangeTab}
				value={tabValue}
			>
				<Tab value="/" label="主页" />
				<Tab value="/test" label="测试 - Codemirror-0" />
			</Tabs>
		</div>
	);
};

export default withRouter(Header);
