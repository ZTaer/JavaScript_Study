import React, { useState } from "react";
import { Slider, Typography } from "@material-ui/core";

const SliderMarks = () => {
  /**
   * Slider组件: 自定义market的Slider( 完成笔记 )
   *      a) 核心属性:
   *          0. step属性: 在自定义marks时，要设定为null
   *          1. marks属性: 自定义marks
   *          2. valueLabelFormat属性: 格式化label渲染
   */
  const [voice, setVoice] = useState(0);

  const handleChangeVoice = (newValue) => {
    return `${newValue}`;
  };

  const marks = [
    {
      value: 0,
      label: "0°C"
    },
    {
      value: 20,
      label: "20°C"
    },
    {
      value: 37,
      label: "37°C"
    },
    {
      value: 100,
      label: "100°C"
    }
  ];

  function valueLabelFormat(value) {
    return value;
  }

  return (
    <div style={{ width: "300px", margin: "0px auto" }}>
      <Slider
        valueLabelDisplay="auto"
        defaultValue={20}
        valueLabelFormat={valueLabelFormat} // valueLabelFormat属性: 格式化label渲染
        getAriaValueText={handleChangeVoice}
        step={null} // step属性: 在自定义marks时，要设定为null
        marks={marks} // marks属性: 自定义marks
      />
      <Typography variant="subtitle1"> {voice} </Typography>
    </div>
  );
};

export default SliderMarks;
