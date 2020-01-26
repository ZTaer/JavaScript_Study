import React from 'react';

import withData from '../with-data/with-data.component';

class UserProfile extends React.Component {

  constructor(props){
    super(props);
  }  

  render(){
    const { name, email, data } = this.props;
    return (
      <div className='container'>
        <h1>{name}</h1>
        <h2>{email}</h2>
        测试数据:
        {
          data.map( post => (
            <div key={post.id} className="post">
              <h1>{post.title}</h1>
              <p>{ post.body }</p>
            </div>
          ) ) 
        }
      </div>
    );
  }


}  

//  hocs高级组件使用方式二: 使用hocs高级组件( 等待笔记 )
export default withData(UserProfile) ;
