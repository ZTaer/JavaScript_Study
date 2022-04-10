import React,{ useState } from "react";
import { Slider, Typography } from "@material-ui/core";

const SliderScale = () => {

    /**
     * Slider：进行数值计算( 完成笔记 )
     *      a) scale函数: 根据Slider的value值进行计算
     */

    const [ voice, setVoice ] = useState(50);
    const [ scaleResult, setScaleResult ] = useState(0);

    const handleChangeVoice = ( event, newValue ) => {
        setVoice( newValue );
    };

    const handleScale = ( value ) => {
        setScaleResult( value ** 2 );
    };

    return(
        <div style={{ width:"300px", margin: "0px auto" }} >
            <Slider 
                value={ voice }
                min={0}
                max={100}
                onChange={ handleChangeVoice }
                scale={ handleScale }                      // scale函数: 根据Slider的value值进行计算
            />
            <Typography variant="subtitle1" > { voice } , { scaleResult } </Typography>
        </div>
    );
};

export default SliderScale;