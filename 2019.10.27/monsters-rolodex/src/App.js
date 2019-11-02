// import 可以多类型导入
import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { CardList } from './components/card-list/card-list.component';

class App extends Component{
  constructor(){
   super();
    this.state = {
      monsters: [],
    }
  }

  // react-关于componentDidMount()此函数是在，componet中render()完只后执行的内容。( 等待笔记 )
    // 0. 经常用于请求数据,改变this.state数据,以至于react又要调用render()渲染界面。
  componentDidMount(){

    // async异步套装请求怪物数据
    async function getMonsters(){
      try{
        const users = await axios('https://jsonplaceholder.typicode.com/users');
        return users;
      }catch( error ){
          console.log( error )
      }
    }
    getMonsters().then( cur => {
      this.setState( { monsters: cur.data } );
    } );

  }
  
  render(){
    // map()函数渲染JSX方法使用( 用于循环数组, 只不过在这里是的内容是JSX )( 等待笔记 )
        // 0. 使用map函数的优势:
          // a) react非常的聪明, 如果map循环的数据中有变化, 那么他只会渲染发生变化的内容, 不会全部重新渲染
          // b) 这样的方法大大提高了效率 
        // 1. JSX中map函数使用注意事项: 
          // a) JSX中大括号中才能写JS语法: { JS语法 }
          // b) key属性，非常重要react用于标识不同的标签, 
            // 0. 有map()的地方一定要有key配合
            // 1. key一般存储id, 放置于JSX标签属性
          // c) 如果有cur => { return xxx; }别忘记return, map()才能重组数组;
        // 2. map()无return写法 
          // { this.state.monsters.map( cur => <h1 key={ cur.id } > { cur.name } </h1> ) }
        // 3. map()有return写法, 如下:
    console.log(this.state.monsters);
    return(
      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }

}

/* 1. 测试Componet/render( return(JSX) )/onClick/this.setState({})
class App extends Component {
  constructor(){
    // 继承蓝图属性
    super();

    this.state = {
      string: '这是一个测试',
    };
    this.test = {
      name: 'ztaer',
    };

  }

  // render()渲染JSX到前端( 等待笔记 )
  // 0. 函数本身为Component类中的函数, 经过蓝图继承, 可直接调用蓝图函数.
  // 1. 使用方法: 
    // a) 前提条件是在Component类下
    // b) render(){ return( JSX内容 ) };
  render(){
    return(

      // JSX是React模仿HTML的内容( 等待笔记 )
        // 0. JSX大致于HTML相似，只不过更加方便改变参数在JS中
        // 1. 注意className == class: 目的是为了区分JS的class
        // 2. JSX中大括号内才可以写JS语法: 如src={ logo }
      // JSX-关于onClick={ function }用法( 等待笔记 )
        // 0. 在JSX中添加此方法后，当用户单击时，将重新执行render()函数，也就是前端界面将重新渲染
        // 1. 经常使用此方法来改变某个变量参数, 来反应到前端
        // 如: onClick={ ()=>{ this.setState({ string: 'change this' }) } }
      // this.setState({ string: 'test' }); == this.state.string = 'test';( 等待笔记 )
        // 0. 此方法能轻松的改变对象属性参数
        // 1. 注意: 只能使用在this.state对象中, 其它名称对象不行
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            { this.state.string }
          </p>
          <button onClick={ () => { this.setState({ string: '测试onClick函数，以及this.setState({})直接访问对象属性的写法' }) } } >
            Click Change Text
          </button>
        
        </header>
      </div>
    );

  }

}
*/

/* 0. 原始内容
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          { this.state.string }
        </p>
        <button onClick={ () => { this.setState({ string: '测试onClick函数，以及this.setState({})直接访问对象属性的写法' }) } } >
          Click Change Text
        </button>
      
      </header>
    </div>
  );
}
*/



export default App;
