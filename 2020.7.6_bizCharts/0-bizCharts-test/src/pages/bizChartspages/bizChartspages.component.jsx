import React from 'react';
import ChartsBase from '../../components/charts-base/charts-base.component';
import ChartsCircleBase from '../../components/charts-circle-base/charts-circle-base.component';

import "./bizChartspages.styles.scss";

const BizChartsPages = () => {

    return (
        <div className="bizCharts-pages">
            <h2>ChartsBase</h2>
            <ChartsBase />
            <h2>ChartsCircleBase</h2>
            <ChartsCircleBase />
        </div>
    );
};

export default BizChartsPages;