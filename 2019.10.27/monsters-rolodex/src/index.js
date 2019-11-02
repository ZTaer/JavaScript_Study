import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render()指定ID标签,渲染JSX内容到前端( 等待笔记 )
    // 0. <App />: 自定义标签
    // 1. 使用方法: ReactDOM.render( <自定义标签 />, 渲染位置  );
ReactDOM.render(<App />, document.getElementById('root'));

// 自定义标签( 等待笔记 )
    // 0. 因为class开头大写, 自定义标签名称与class名相同
    // 1. 可以使用自定义标签的情况:
        // a) 类情况: class Xxx extends Component{ render( return( JSX ) ); }
        // b) 函数情况: 
            // 0. const Xxx ()=>( JSX ): 小括号其实具有欺骗,编译器的效果,使编译器直接执行/返回小括号内容
            // 1. const Xxx ()=>{ return (JSX) }
            // 2. function Xxx(){ return (JSX) }
    // 3. <Xxx/>自定义标签转换过程 
        // a) 自定义标签( JSX -> 自定义标签 -> HTML ): 
    // 4. 关于JSX名称要开头大写

// 合理的文件结构( 等待笔记 )
    // 0. webpack最终将会把他们打包一起
    // 0. 关于JSX文件结构化:
        // a) 类名.文件夹.jsx
        // b) 示例:
            /** components文件夹:
             *  --card文件夹
             *  ----card.components.jsx
             *  ----card.style.css
             *  
             *  --search-box文件夹
             *  ----search.components.jsx
             *  ----search.style.css 
             */
            

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
