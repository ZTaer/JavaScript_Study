import React from 'react';
import axios from 'axios';

// hocs高级组件构建方式二: 获取异步数据实列( 完成笔记 )
    // 0. 所为高级组件, 是接受一个组件进行加工处理
    // 1. 核心: 目标组件使用高级组件后, 高级组件可默认接受目标组件的所有props数据, 以便加工处理
        // a) 所以此时的dataSource可直接使用 
    // 2. WrappedComponent: 接受一个组件 - 返回: <WrappedComponent xxx={this.state.xxx} {...this.props} />
        // a) 重点在于,"...this.props"为必备参数
        // b) xxx为当前异步请求的数据
    // 3. 注意: withData( WrappedCommponent, xxx )也可以接受更多的参数, 不要忘记使用时也要加入相应的参数
const withData = (WrappedComponent) => {
    class WithData extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                data:[],
            };
        }  

        rqPosts = async () => {
            try{
                const dataBase = await axios(this.props.dataSource);
                this.setState({ data: dataBase.data.slice(0,5) });
            }
            catch{
                alert('请求数据失败!');
            }
        }

        componentDidMount(){
            this.rqPosts();
        }

        render(){
            return this.state.data.length > 1 ?
            ( <WrappedComponent data={this.state.data} {...this.props} /> ) :
            ( <h1>加载中...</h1> );
        }
    }
    return WithData;
}

export default withData;