import React from 'react';
import axios from 'axios';

class UserList extends React.Component {

  constructor(){
    super();
    this.state = {
      users: [],
    };
  }  

  rqPosts = async () => {
    try{
      const dataBase = await axios(`https://jsonplaceholder.typicode.com/users`);
      this.setState({ users: dataBase.data.slice(0,5) },()=>console.log(this.state));
    }
    catch{
      alert('请求数据失败!');
    }
  }

  componentDidMount(){
    this.rqPosts();
  }

  render(){
    return (
      <div className="container user-list">
        <h1>用户列表</h1>
        {
          this.state.users ?
          this.state.users.map( post => (
            <div key={post.id} className="post">
              <h1>{post.name}</h1>
              <h2>{post.email}</h2>
            </div>
          ) ) :
          null
        }
      </div>
    );
  }


}  

export default UserList;
