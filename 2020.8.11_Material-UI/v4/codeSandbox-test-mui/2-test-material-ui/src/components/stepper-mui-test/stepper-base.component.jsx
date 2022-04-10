import React,{ useState } from "react";
import { Stepper, Step, StepLabel, Typography, Button } from "@material-ui/core";

const StepperBase = () => {

    /**
     * Stepper组件: 带基本逻辑的Stepper( 完成笔记 )
     */

     const [ activeStep, setActiveStep ] = useState(0);             // 0. 当前活动步骤
     const [ jump, setJump ] = useState([]);                        // 1. 已跳过步骤
     const stepArray = [ "步骤0","步骤1","步骤2","步骤3", ];         // 2. 渲染步骤
     const canJump = [ 1,2 ];                                       // 3. 允许跳过的步骤 

     /**
      * 逻辑区
      */
     // a) 下一步
     const handleNext = () => {
        handleDeleteJump();
        setActiveStep( activeStep + 1 );
     };

     // b) 上一步
     const handlePrev = () => {
         setActiveStep( activeStep - 1 );
     };

     // c) 跳过
     const handleJump = () => {
         setJump( [...jump, activeStep] );
         setActiveStep( activeStep + 1 );
     };

     // d) 删除当前步骤的跳过状态
     const handleDeleteJump = () => {
        const newJump = [ ...jump ];
        if( newJump.includes( activeStep ) ){
            const pos = newJump.indexOf( activeStep );
            newJump.splice( pos, 1 );       // 实验: 删除指定位置数组元素
        }
        setJump( newJump );
     };

     // e) 重置
     const handleReset = () => {
        setActiveStep(0);
        setJump([]);
     };

     // f) 判断当前步骤是否可跳过
     const handleIsJump = () => {
         return !canJump.includes( activeStep );
     };

    return(
        <div style={{ width:"60%", margin:"0px auto" }} >
            <Stepper
                activeStep={ activeStep }
            >
                {
                    stepArray.map( ( item, index ) => {

                        const stepProps = {};
                        const stepLabelProps = {};

                      // 用于判断是否增加跳过状态属性
                        if( jump.includes( index ) ){
                            stepProps.completed=false;
                        }
                    
                      // 用于增加描述内容属性
                        if( index === 1 ){
                            stepLabelProps.optional = <Typography variant="caption">描述内容</Typography>;
                        }

                        return(
                            <Step key={index} { ...stepProps } >
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
                onClick={ handleJump }
                disabled={ handleIsJump() }
            >
               跳过
            </Button>
            <Button 
                color="primary" 
                onClick={ handleNext }
                disabled={ activeStep === stepArray.length ? true : false }
            >
                {
                    activeStep < stepArray.length - 1 ? "下一步" : "完成"
                }
            </Button>
        </div>
    );
};

export default StepperBase;