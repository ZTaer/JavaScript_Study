import React from "react";
import { Switch, Route } from "react-router-dom";
import Examp from "../examplepages/example.component";
import React404Pages from "../react404pages";
import StateImage from "../../components/state-image";

/**
 * 针对React子路由做404配置( 等待笔记 )
 *      a) 核心: <Route exact={true} path="*" component={React404Pages} />
 *      b) 注意:
 *          0. 此路由一定放置路由最下面
 *          1. 父组件一定要是react-router-dom下的Switch,不可有其他组件恰在中间
 *      c) 子路由: 于上方规则相同 ( 注意 )
 *          0. 注意: 一定要注意，子路由也需要嵌套, react-router-dom下的Switch,不可有其他组件恰在中间
 */

const SonPages = (props) => {
    const { match } = props;

    return (
        <div>
            <Switch>
                <Route exact path={`${match.path}`} component={Examp} />
                <Route
                    exact
                    path={`${match.path}/test`}
                    component={StateImage}
                />
                <Route
                    // 注意:
                    //      0. 此路由一定放置路由最下面
                    //      1. 父组件一定要是react-router-dom下的Switch,不可有其他组件恰在中间
                    exact={true}
                    path="*"
                    component={React404Pages}
                />
            </Switch>
        </div>
    );
};

export default SonPages;
