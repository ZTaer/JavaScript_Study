import React,{ useState } from 'react';
import {
    Chart,
    Interval,
    Tooltip,
    Legend,
    Axis,
    View,
    Coordinate
} from 'bizcharts';

const ChartsCircleBase = () => {
    const data1 = [
        { value: 251, type: '大事例一', name: '子事例一' },
        { value: 1048, type: '大事例一', name: '子事例二' },

        { value: 610, type: '大事例二', name: '子事例三' },
        { value: 434, type: '大事例二', name: '子事例四' },
        
        { value: 335, type: '大事例三', name: '子事例五' },
        { value: 250, type: '大事例三', name: '子事例六' },
    ];
    const [ data, setData ] = useState( data1 );

    return (
        <div className="charts-circle-base-container">
            
        </div>
    );
};

export default ChartsCircleBase;