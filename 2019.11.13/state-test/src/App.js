import React from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * class简洁版 - 依据ES6,class
 */
// 0. 无需constructor,因为他在class默认存在
// 1. 属性直接写即可，他会自动认定数据进入constructor下
// 2. 函数无变化
class App2 extends React.Component{
  state = {
    age: 12,
  }

  addAge = ()=>{
    this.setState( { age: this.state.age + 1 } );
  }

  render(){
    return ( 
        <div className="App2">
            <p>
              { this.state.age }
            </p>
            <button onClick={ this.addAge } >
              增加
            </button>
        </div>
     );
  }

}


/************* cut */

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      age: 48,
    };

  }

  clickOnChangeAdd = () => {
    /**
     * this.setState()的本质
     */
    // 0. this.setState()为异步函数, 属于Component组件
    // 1. 本质用法: this.setState( ( prevState, prevProps )=>{ return {} }, ()=>{ '衔接异步数据处理' } );
        // a) 其实他有二个回调参数:
          // 0. prevState: 相当于复制this.state数据
          // 1. prevProps: 相当于复制this.props数据
          // 2. prevState/prevProps名称可变
        // b) 只所以异步是因为效率, React能根据最佳时机来改变this.state的数据
        // c) 正是因为有prevState,prevProps二个回调参数为对象类型, 他才诞生了‘正常用法必须使用对象的形式‘
        // d) 注意修改this.state数据: return { age: 'xxx' }依旧为对象类型
    // 2. 正常用法: this.setState( { xxx: 'yyy' }, ()=>{ '衔接异步数据处理' } );
    // 3. 关于this.props
        // a) this.props属于 Component组件的默认属性
        // b) 它包含的是'自定义标签'传递来的标签属性
            // 0. 如: < APP test="123" string="hahah" / > 那么this.props == {test:'123', string='hahah'};
    this.setState( 
      ( prevState, prevProps ) => { 
          console.log( prevState , prevProps ); // {age:48} , {test:123}
          return { age: prevState.age + prevProps.addNum  };
      }, 
      () => console.log( this.props ) // {test:123}
    );
    
  }

  render(){
    return ( 
        <div className="App">
            <p>
              { this.state.age }
            </p>
            <button onClick={ this.clickOnChangeAdd } >
              增加
            </button>
        </div>
     );
  }

/************* cut */

  /**
   * class中箭头函数和普通函数调用实战
  // 0. 箭头函数调用更加便利
  // 1. 普通函数调用较为麻烦

  // 0. 箭头函数
  clickOnChangeAdd = () => {
    this.setState({ age: this.state.age+1 });
  }

  // 1. 普通函数
  clickOnChangeLess(){
    this.setState({ age: this.state.age-1 });
  }

  render(){
    return ( 
        <div className="App">
          <header className="App-header">

            <p>
              { this.state.age }
            </p>

            // 箭头函数调用 
            <button onClick={ this.clickOnChangeAdd } >
              增加
            </button>

            // 普通函数调用方法
            <button onClick={ () => this.clickOnChangeLess() } >
              减少
            </button>
            
          </header>
        </div>
     );
  }
  */
}

export { App, App2 };
