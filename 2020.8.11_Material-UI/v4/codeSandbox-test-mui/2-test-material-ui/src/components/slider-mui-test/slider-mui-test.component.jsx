import React,{ useState } from "react";
import { Slider, Typography } from "@material-ui/core";
import SliderMarks from "./slider-marks.component";
import SliderRanger from "./slider-ranger.component";
import SliderScale from "./slider-scale.component";

const SliderMuiTest = () => {

    /**
     * Slider组件: 滑杆组件( 如: 声音调控所需 | 完成笔记 )
     *      0. defaultValue属性: 设定默认值
     *      1. getAriaValueText函数: 固定逻辑获取，当前设定的数值 
     *      2. orientation属性: 设定渲染方向: "vertical" 垂直 | 默认为平行方向
     *      3. track属性: false 关闭轨道样式渲染 | true 开启轨道样式渲染 | "vertical" 轨道倒叙渲染
     *      4. aria-labelledby属性: 对标签描述
     *      5. valueLabelDisplay属性: "on" 一直显示当前数值提示标签 | "auto" 数值改变时显示提示标签
     *      6. step属性: 设定每一次跨步的标记点大小( 可自定义 )
     *      7. marks属性: 是否打开跨步模式来调整大小
     *      8. disabled属性: 是否禁用标签
     *      9. min属性: 最小值
     *      10. max属性: 最大值
     */

    const [ voice, setVoice ] = useState(50);
    const [ getValue, setGetValue ] = useState(0);

    const handleChangeVoice = ( event, newValue ) => {
        setVoice( newValue );
    };

    const valuetext = ( value ) => {
        return value;
    };

    return(
        <div>
            <h4>基本的Slider</h4>
            <div style={{ width:"300px", margin: "0px auto" }} >
                <Slider 
                    value={ voice }
                    max={100}
                    min={0}
                    onChange={ handleChangeVoice }
                    disabled={false}
                />
                <Typography variant="subtitle1" > { voice } </Typography>
            </div>

            <h4>阶梯式增减Slider</h4>
            <h5> {getValue} </h5>
            <div style={{ width:"300px",height: "300px", margin: "0px auto" }} >
                <Slider 
                    defaultValue={30}                   // defaultValue属性: 设定默认值
                    getAriaValueText={valuetext}        // getAriaValueText函数: 固定逻辑获取，当前设定的数值 
                    orientation="vertical"              // orientation属性: 设定渲染方向: "vertical" 垂直 | 默认为平行方向
                  // track={false}                   // track属性: false 关闭轨道样式渲染 | "vertical" 轨道倒叙渲染 | 注意: 不可为true否则将报错
                    onChange={ ( event, newValue ) => setGetValue( newValue ) }
                    value={getValue}
                    
                    aria-labelledby="discrete-slider"   // aria-labelledby属性: 对标签描述
                    valueLabelDisplay="on"              // valueLabelDisplay属性: "on" 一直显示当前数值提示标签 | "auto" 数值改变时显示提示标签

                    step={10}                           // step属性: 设定每一次跨步的标记点大小( 可自定义 )
                    marks={true}                        // marks属性: 是否打开跨步模式来调整大小
                    disabled={false}                    // disabled属性: 是否禁用标签
                    min={0}                             // min属性: 最小值
                    max={100}                           // max属性: 最大值
                />
            </div>

            <h4>自定义marks的Slider</h4>
            <SliderMarks />

            <h4>Slider：范围数值设定</h4>
            <SliderRanger />

            <h4 className="">Slider：进行数值计算</h4>
            <SliderScale />
        </div>
    );
};

export default SliderMuiTest;