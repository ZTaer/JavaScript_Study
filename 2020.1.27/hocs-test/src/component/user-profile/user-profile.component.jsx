import React from 'react';
import axios from 'axios';

class UserProfile extends React.Component {

  constructor(){
    super();
    this.state = {
      posts: [],
    };
  }  

  rqPosts = async () => {
    try{
      const dataBase = await axios(`https://jsonplaceholder.typicode.com/posts`);
      this.setState({ posts: dataBase.data.slice(0,3) },()=>console.log(this.state));
    }
    catch{
      alert('请求数据失败!');
    }
  }

  componentDidMount(){
    this.rqPosts();
  }

  render(){
    const { name, email } = this.props;
    return (
      <div className='container'>
        <h1>{name}</h1>
        <h2>{email}</h2>
        测试数据:
        {
          this.state.posts ?
          this.state.posts.map( post => (
            <div key={post.id} className="post">
              <h1>{post.title}</h1>
              <p>{ post.body }</p>
            </div>
          ) ) :
          null
        }
      </div>
    );
  }


}  

export default UserProfile;
