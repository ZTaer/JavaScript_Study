import React from 'react';
import "./header.styles.scss";
import { Link } from "react-router-dom";

// React-React导入svg文件( 完成笔记 )
    // 0. import { ReactComponent as Logo } from "../../assets/crown.svg";
    // 1. 因为文件为jsx文件格式，所以需要借用 ReactComponent 这是规则，
    // 2. { ReactComponent as Logo }修改名称为logo 
    // 3. 这样就可以使用自定义标签来代表svg图像<Logo />
    // 4. SVG的优势: svg图标，为矢量图，并且很小
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = () => {
    return(
        <div className="header">
            <Link className="logo-container" to="/" >
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/" >
                    主页
                </Link> 
                <Link className="option" to="/shop" >
                    产品
                </Link>
                <Link className="option" to="/shop" >
                    联系
                </Link>
                <Link className="option" to="/sign" >
                    注册/登陆
                </Link>
            </div>
        </div>
    );
}

export default Header;

