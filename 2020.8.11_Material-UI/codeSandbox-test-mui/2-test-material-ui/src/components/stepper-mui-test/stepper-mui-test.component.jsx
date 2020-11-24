import React from "react";
import { Stepper, Step, StepLabel, Typography, Button } from "@material-ui/core";
import StepperBase from "./stepper-base.component";
import Check from "@material-ui/icons/Check";
import { makeStyles } from "@material-ui/core/styles";
import StepperNoLinear from "./stepper-no-linear.component";
import StepperVertical from "./stepper-vertical.component";

const useStyles = makeStyles({
    circle: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    }
});

const StepperMuiTest = () => {

    const classes = useStyles();

    /**
     * Stepper组件: 步骤组件( 完成笔记 )
     *      a) 注意: 线性 | 非线性，区别
     *          0. 线性: 步骤必须一步一步的完成
     *          1. 非线性: 步骤可跳跃式完成
     *      b) Stepper组件属性:
     *          0. activeStep属性: 操控0~x指定Step组件为active={true}活动状态( 注意: active={true}状态只能有一个组件,否则会报错 )
     *          1. connector属性: 改变步骤间的线状组件
     *          2. nonLinear属性: true时，步骤无法返回上一步，false时，则相反
     *          3. orientation属性: "horizontal" 步骤组件水平 | ”vertical“ 步骤组件垂直
     *          4. alternativeLabel属性: true 时步骤组件的label放置下方 | false时label与步骤组件水平放置( 默认 )
     *      c) Step组件属性:
     *          0. completed属性: true时为完成状态，false则相反
     *          1. active属性: true时为活动状态，false则相反
     *      d) StepLabel组件属性:
     *          0. optional属性: 描述内容备注
     *          1. error属性: 报错样式渲染
     *          2. StepIconComponent属性: 自定义图标
     */

    // a) 配合StepLabel组件的StepIconComponent属性: 更换图标
    const QontoStepIcon = (props) => {
        const { completed, active } = props;
        return (
            <div>
                {completed ? <Check /> : <div className={ classes.circle } />}
            </div>
        );
    }

    return(
        <div style={{ width:"60%", margin:"0px auto" }} >
            <h4>基本的Stepper组件( 线性 )</h4>
            <Stepper
                activeStep={3}              // activeStep属性: 操控0~x指定Step组件为active={true}活动状态( 注意: active={true}状态只能有一个组件,否则会报错 )
               // connector={<div>-</div>} // connector属性: 改变步骤间的线状组件
                nonLinear={false}           // nonLinear属性: true时，步骤无法返回上一步，false时，则相反
                orientation="horizontal"    // orientation属性: "horizontal" 步骤组件水平 | ”vertical“ 步骤组件垂直
                alternativeLabel={true}     // alternativeLabel属性: true 时步骤组件的label放置下方 | false时label与步骤组件水平放置( 默认 )
            >
                <Step>
                    <StepLabel>
                        第1步
                    </StepLabel>
                </Step>
                <Step
                     completed={false}       // completed属性: true时为完成状态，false则相反
                     active={false}          // active属性: true时为活动状态，false则相反
                >
                    <StepLabel
                        optional={<Typography variant="caption">描述内容</Typography>}  // optional属性: 描述内容备注
                        error={true}                                                   // error属性: 报错样式渲染
                    >
                        第2步
                    </StepLabel>
                </Step>
                <Step>
                    <StepLabel
                        StepIconComponent={ QontoStepIcon }                            // StepIconComponent属性: 自定义图标
                    >
                        第3步
                    </StepLabel>
                </Step>
                <Step>
                    <StepLabel>
                        第4步
                    </StepLabel>
                </Step>
            </Stepper>

            <h4> 带基本逻辑的Stepper( 线性 )</h4>
            <StepperBase />

            <h4> 带基本逻辑的Stepper( 非线性 )</h4>
            <StepperNoLinear />

            <h4> Stepper组件: 垂直的Stepper( 完成笔记 ) </h4>
            <StepperVertical />
        </div>
    );
};

export default StepperMuiTest;