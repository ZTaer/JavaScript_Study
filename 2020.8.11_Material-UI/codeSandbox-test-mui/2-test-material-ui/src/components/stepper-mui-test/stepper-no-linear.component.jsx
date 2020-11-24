import React,{ useState } from "react";
import { Stepper, Step, StepLabel, Typography, Button } from "@material-ui/core";

const StepperNoLinear = () => {

    /**
     * Stepper组件: 带基本逻辑的Stepper( 非线性 | 完成笔记 )
     *      a) nonLinear属性: 开启非线性模式 ( 核心属性 )
     */

     const [ activeStep, setActiveStep ] = useState(0);         // 0. 当前活动步骤
     const [ complete, setComplete ] = useState([]);            // 1. 已完成步骤
     const stepArray = [ "步骤0","步骤1","步骤2","步骤3", ];      // 2. 渲染步骤 

     /**
      * 逻辑区
      */
     // a) 下一步
     const handleNext = () => {
        setActiveStep( activeStep + 1 );
     };

     // b) 上一步
     const handlePrev = () => {
         setActiveStep( activeStep - 1 );
     };

     // c) 重置
     const handleReset = () => {
        setActiveStep(0);
        setComplete([]);
     };

     // d) 完成步骤
     const handleAddComplete = () => {
        setComplete( [ ...complete, activeStep ] );
        if (activeStep < stepArray.length - 1 )  handleNext() ; // 在最后一个步骤时，不执行下一步逻辑
     };

     // e) 验证是否已完成步骤
     const handleIsComplete = () => {
        return complete.includes( activeStep );
     };

     // f) 跳跃到指定步骤
     const handleChangeActiveStep  = ( num ) => {
        setActiveStep( num );
     };

    return(
        <div style={{ width:"60%", margin:"0px auto" }} >
            <Stepper
                activeStep={ activeStep }
                nonLinear={true}                                // nonLinear属性: 开启非线性模式
            >
                {
                    stepArray.map( ( item, index ) => {

                        const stepProps = {};
                        const stepLabelProps = {};
                    
                      // 判断步骤是否完成
                        if( complete.includes( index ) ){
                            stepProps.completed = true;
                        }

                      // 用于增加描述内容属性
                        if( index === 1 ){
                            stepLabelProps.optional = <Typography variant="caption">描述内容</Typography>;
                        }

                        return(
                            <Step 
                                key={index} 
                                onClick={ () => handleChangeActiveStep( index ) } 
                                style={{ cursor: "pointer" }}
                                { ...stepProps }  
                            >
                               <StepLabel {...stepLabelProps} >
                                { item }
                               </StepLabel> 
                            </Step>
                        );
                    } )
                }
            </Stepper>

            <Button 
                color="primary" 
                onClick={ handlePrev }
                disabled={ activeStep === 0 ? true : false }
            >
               上一步
            </Button>
            <Button 
                color="secondary" 
                onClick={ handleReset }
            >
               重置
            </Button>
            <Button 
                color="secondary" 
                onClick={ handleAddComplete }
                disabled={ handleIsComplete() }
            >
                {
                    handleIsComplete() ? "已完成" : "完成"
                }
            </Button>
            <Button 
                color="primary" 
                onClick={ handleNext }
                disabled={ activeStep >= stepArray.length - 1 ? true : false }
            >
               下一步 
            </Button>
        </div>
    );
};

export default StepperNoLinear;