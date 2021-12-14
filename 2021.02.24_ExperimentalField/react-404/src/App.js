import React, { lazy, Suspense } from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";

import HomePages from "./pages/homepages/homepages.component";
import Header from "./components/header/header.component";

// Lazy+Suspense
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import Spinner from "./components/spinner/spinner.component";

import { GlobalStyled } from "./global.styles";
import React404Pages from "./pages/react404pages";
import SonPages from "./pages/sonpages";

// lazy示例
const ExamplePages = lazy(() =>
    import("./pages/examplepages/example.component")
);

/**
 * 针对React主路由做404配置( 等待笔记 )
 *      a) 核心: <Route exact={true} path="*" component={React404Pages} />
 *      b) 注意:
 *          0. 此路由一定放置路由最下面
 *          1. 父组件一定要是react-router-dom下的Switch,不可有其他组件恰在中间
 *      c) 子路由: 于上方规则相同 ( 注意 )
 *          0. 注意: 一定要注意，子路由也需要嵌套, react-router-dom下的Switch,不可有其他组件恰在中间
 */

function App() {
    return (
        <div className="App">
            <Header />
            <GlobalStyled />
            <ErrorBoundary>
                <Suspense fallback={<Spinner />}>
                    <Switch>
                        <Route exact={true} path="/" component={HomePages} />
                        <Route
                            exact={true}
                            path="/example"
                            component={ExamplePages}
                        />
                        <Route path="/son" component={SonPages} />
                        <Route
                            // 注意:
                            //      0. 此路由一定放置路由最下面
                            //      1. 父组件一定要是react-router-dom下的Switch,不可有其他组件恰在中间
                            exact={true}
                            path="*"
                            component={React404Pages}
                        />
                    </Switch>
                </Suspense>
            </ErrorBoundary>
        </div>
    );
}

export default App;
