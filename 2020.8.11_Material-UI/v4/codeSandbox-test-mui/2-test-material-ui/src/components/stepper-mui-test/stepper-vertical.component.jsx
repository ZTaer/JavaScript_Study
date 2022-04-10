import React,{ useState } from "react";
import { Stepper, Step, StepLabel, StepContent, Typography, Button } from "@material-ui/core";

const StepperVertical = () => {

    /**
     * Stepper组件: 垂直的Stepper( 完成笔记 )
     *      a) 使Stepper垂直核心属性:
     *          0. orientation属性: "vertical"开启垂直的Stepper( 垂直核心 )
     *      b) StepContent组件: 在Stepper内，用于渲染数据容器 
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

    // g) 对应渲染内容
    const getStepperData = ( index ) => {
        switch( index ){
            case 0:
                return `
                    For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversions, 
                    which networks and geographical locations you want your ads to show on, and more. 
                `;
            case 1:
                return `
                    我是内容用来筹数的~
                `;
            case 2:
                return `
                    123213123213213123
                `;
            default:
                return `暂无数据`;
        }
    };

    // h) 跳转指定active
    const handleChangeActiveStep = ( target ) => {
        setActiveStep( target );
    };

    return(
        <div style={{ width:"60%", margin:"0px auto" }} >
            <Stepper
                activeStep={ activeStep }
                orientation="vertical"      // orientation属性: "vertical"开启垂直的Stepper( 垂直核心 )
            >
                {
                    stepArray.map( ( item, index ) => {

                        const stepProps = {};
                        const stepLabelProps = {};

                        if( jump.includes( index ) ){
                            stepProps.completed=false;
                        }
                    
                        if( index === 1 ){
                            stepLabelProps.optional = <Typography variant="caption">描述内容</Typography>;
                        }

                        return(
                            <Step key={index} { ...stepProps } onClick={ () => handleChangeActiveStep( index ) } >
                               <StepLabel {...stepLabelProps} >
                                { item }
                               </StepLabel> 
                               <StepContent>
                                   {getStepperData(index)}
                               </StepContent>
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

export default StepperVertical;