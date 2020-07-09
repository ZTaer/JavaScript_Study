/**
 * bizCharts: 基础柱状图配置( 等待笔记 )
 */
import React,{useState} from 'react';
import { 
        Chart, 
        Interval,
        registerTheme,                      // 构建自己的图表主题
        useTheme,                           // 将图表主题赋值给useTheme --> 赋值给Chart的theme属性
        getTheme,                           // getTheme("dark"/"light")获取默认主题
        Tooltip,                            // 鼠标图表提示框
        Axis,                               // 
        Geom, 
        Legend
    } from 'bizcharts';

import "./charts-base.styles.scss";

const ChartsBase = () => {
    // 注册自己的主题
    registerTheme('my-theme',{
        defaultColor:'red',                                                             // 柱状图上方小点颜色
            geometries: {
                interval: {
                    rect: {
                        default: { style: { fill: '#000', fillOpacity: 0.95 } },        // 柱状图css
                        active: { style: { stroke: 'yellow', lineWidth: 1 } },          // 鼠标hover情况下的css
                        inactive: { style: { fillOpacity: 0.3, strokeOpacity: 0.3 } },
                        selected: {},
                    }
                }
            }
        }
    );
    const [ theme, setTheme ] = useTheme("my-theme");

    // 图表数据
    const data1 = [
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter', sold: 350 },
        { genre: 'Other', sold: 150 }
    ];

    const data2 = [
        { genre: 'Sports', sold: 205 },
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter', sold: 150 },
        { genre: 'Other', sold: 150 }
    ];

    // 定义度量
    const cols = {
        sold: { alias: '销售量' },
        genre: { alias: '游戏种类' }
    };

    const [ data, setData ] = useState( data1 );
    const [ dataState, setDataState ] = useState(true);

    const handleSetChartData = () => {
        if( dataState ){
            setData(data2);
            setDataState(false);
        }else{
            setData(data1);
            setDataState(true);
        }
    }

    // 例：
    return (
        <div className="charts-base">
            <div className="chart-container">
                <h3>
                    · 默认色版本
                </h3>
                <Chart 
                    scale={cols}
                    height={320}                           // 固定高度 
                    autoFit                                // 是否开启图表自适应 
                    theme={theme}                          // 切换图表主题
                    data={data}                            // 图表数据
                    interactions={["element-highlight"]}   // 交互动画：https://bizcharts.net/product/BizCharts4/category/62/page/112#type
                    padding={[30, 30, 30, 30]}             // 上右下左
                    placeholder = {"无法获取图表数据~"}     // 当data为undefined时，placeholder的数据将渲染显示
                >
                    <Tooltip  
                        visible={true}                    // 是否显示图表上的“提示框”( 鼠标放在图表时的提示框 )
                        title={"销售数量/月"}              // 提示框标题
                        shared={true}                     // 为兼容性
                    /> 
                    <Interval position={"genre*sold"} />
                </Chart>
                <h3>
                    · 多颜色版本
                </h3>
                <Chart 
                    scale={cols}
                    height={320}                         // 固定高度 
                    autoFit                              // 是否开启图表自适应 
                    theme={theme}                        // 切换图表主题
                    data={data}                          // 图表数据
                    interactions={["element-highlight"]} // 交互动画：https://bizcharts.net/product/BizCharts4/category/62/page/112#type
                    padding={[30, 30, 30, 30]}           // 上右下左
                    placeholder = {"无法获取图表数据~"}    // 当data为undefined时，placeholder的数据将渲染显示
                >
                    <Axis                                // Axis: 坐标轴 
                        name="genre" 
                        visible={true} 
                    />
                    <Axis name="sold" />
                    <Legend                               // Legend: 分类图例
                        marker={{symbol:'circle'}}        // 图例形状: 圆形 
                        position="top"                    // 位置 
                        dy={-20}                          // 偏移位置 
                    />   
                    <Tooltip  
                        visible={true}                    // 是否显示图表上的“提示框”( 鼠标放在图表时的提示框 )
                        title={"销售数量/月"}              // 提示框标题
                        shared={true}                     // 为兼容性
                    /> 
                    <Geom type="interval" position="genre*sold" color="genre" />
                </Chart>
            </div>
            <button onClick={ handleSetChartData } className="set-charts-data">
                切换数据
            </button>
        </div>
    );
};

export default ChartsBase;