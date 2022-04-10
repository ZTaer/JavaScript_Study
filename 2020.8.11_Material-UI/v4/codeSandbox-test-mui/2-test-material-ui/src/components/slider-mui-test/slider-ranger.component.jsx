import React, { useState } from "react";
import { Slider } from "@material-ui/core";

const SliderRanger = () => {
  /**
   * Slider组件: 范围滑杆( 完成笔记 )
   *      a) value属性: 当value为数组时，如: [ 0, 100 ]那么滑块类型就为范围滑块
   */

  const [getValue, setGetValue] = useState([0, 100]);

  const handleSetGetValue = (event, newValue) => {
    setGetValue(newValue);
  };

  return (
    <div>
      <h5> {String(getValue)} </h5>
      <div style={{ width: "300px", margin: "0px auto" }}>
        <Slider
          aria-labelledby="ranger-slider"
          valueLabelDisplay="on"
          min={0}
          max={100}
          value={getValue}                  // value属性: 当value为数组时，如: [ 0, 100 ]那么滑块类型就为范围滑块
          onChange={handleSetGetValue}
        />
      </div>
    </div>
  );
};

export default SliderRanger;
