
/**
 * React组件生命周期分为3个大部分: 
 * 0. Mounting挂载 -> Updating更新 -> Unmounting卸载 
 * 1. Mounting挂载:
 *   a) 运行顺序: constructor() -> componentWillMount() -> render() -> componentDidMount()
 *      0. 函数解析:
 *          a) componentWillMount() - 准备首次渲染组件: 常用于请求数据
 *          b) componentDidMount() - 组件渲染完成: 常用于请求数据
 * 2. Updating更新:
 *   a) 促发条件: this.props/this.state发生改变，forceUpdate()强制更新
 *   b) 运行顺序: shouldComponetUpdate() -> render() -> componentDidUpdate()
 *      0. 函数解析:
 *        a) shouldComponentUpdate() - 决定是否渲染组件: 常用于判断是否数据真正的发生改变,来决定是否渲染
 * 3. Unmounting卸载:
 *   a) 促发条件: 当释放掉此组件时, 由父类级决定不使用目前组件时
 *   b) 运行顺序: componentWillUnmount()
 *      0. 函数解析:
 *          a) componentWillUnmount() 标注着: 组件代码将被内存释放掉, 这是React高效的表现, 且无需使用的组件不会占用系统资源
 */
import React from 'react';

class LifeCycle extends React.Component{

    constructor(){
        super();
        console.log( '@constructor' );
    }

    componentDidMount(){
        console.log( '@componentDidMount' );
    }

    componentDidUpdate(){
        console.log( '@componentDidUpdate' );
    }
    
    componentWillMount(){
        console.log( '@componentWillMount' );
    }

    /**
     * shouldComponentUpdate()决定是否渲染组件
     */
    // 0. 模型:  shouldComponentUpdate( nextProps, nextState ){ return true/false };
        // a) 二个参数:
            // 0. nextProps: 发生改变的this.props属性
            // 1. nextState: 发生改变的this.state属性
        // b) return true代表可以渲染组件
        // c) return false代表不可以渲染组件
    shouldComponentUpdate( nextProps, nextState ){
        console.log( '@shouldComponentUpdate');
        console.log(nextProps,nextState);
        return true;
    }
    
    componentWillUnmount(){
        console.log( '@componentWillUnmount' );
    }
    
    render(){
        console.log( '@render' );
        return (
            <div className="lifeCycle" >
                <h1>生命周期测试</h1>
                <p> {this.props.state.text} </p>
            </div>
        );
    }

}

export default LifeCycle;