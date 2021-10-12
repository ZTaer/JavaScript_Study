import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { MainProps } from './index.model';

const Header = (props: MainProps) => {
	/**
	 * 变量区
	 */
	const [tabValue, setTabValue] = useState('/');
	const { history, location } = props;

	console.log('history :>> ', history, props);

	/**
	 * 运算逻辑区
	 */
	// 页面路由同步tab
	const handleCpuInitUrlTab = () => {
		try {
			const { pathname = '/' } = location;
			setTabValue(pathname);
		} catch {
			console.warn('handleCpuInitUrlTab error');
		}
	};

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

	/**
	 * 初始化区
	 */
	useEffect(() => {
		handleCpuInitUrlTab();
	}, [location.pathname]);

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
