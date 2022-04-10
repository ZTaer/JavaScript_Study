// ==============================|| WIDGET - TOTAL GRAPH VALUE 1 CHART ||============================== //
import { Props } from 'react-apexcharts';

const chartData: Props = {
    type: 'area',
    height: 100,
    options: {
        chart: {
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#fff'],
        fill: {
            type: 'solid',
            opacity: 0.4
        },
        stroke: {
            curve: 'smooth',
            width: 3
        },
        yaxis: {
            min: 0,
            max: 30
        },
        tooltip: {
            theme: 'dark',
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: (seriesName: string) => 'Total Sales'
                }
            },
            marker: {
                show: false
            }
        }
    },
    series: [
        {
            name: 'series1',
            data: [20, 10, 18, 12, 25, 10, 20]
        }
    ]
};

export default chartData;
