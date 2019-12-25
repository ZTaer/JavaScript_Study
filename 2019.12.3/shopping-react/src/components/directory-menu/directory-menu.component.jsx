import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import "./directory-menu.style.scss";

class DirectoryMenu extends React.Component {

    constructor(){
        super();
        this.state = {
            sections:[
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
            ],
        }
    }

    render(){
        return(
            <div className="directory-menu">
                {
                    // 注意map()如何返回JSX( 完成笔记 )
                        // 这里使用了对象的解构
                        // 注意: 解构变量名称 == 对象属性名称( 必须要一致 )
                    // React-解构法自定义标签对象数据传输( 完成笔记 )
                        // 0. 解构法传递，对象属性. 并具有自动识别，未传输参数来进行传输。
                        // 1. 接收方: 依然保持对应的对象名称来接受
                    this.state.sections.map( ( { id, ...otherData } ) => (
                        <MenuItem key={id} {...otherData} ></MenuItem>
                     ) )
                }
            </div>
        );
    }
}

export default DirectoryMenu;