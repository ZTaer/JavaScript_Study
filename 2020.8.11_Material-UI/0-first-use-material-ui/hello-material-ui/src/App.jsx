import React from 'react';
import { Switch, Route } from "react-router-dom";

/**
 * 组件
 */
import HomePages from "./pages/home-pages/home-pages.component";
import ShopPages from "./pages/shop-pages/home-pages.component";
import TestPages from "./pages/test-pages/test-pages.component";
import CutPages from "./pages/cut-pages/cut-pages.component";
import HeaderMuiTest from "./components/header-mui-test/header-mui-test.component";

const App = () => {
  return (
    <div className="App">
      <HeaderMuiTest />
      <Switch>
        <Route exact={true} path="/" component={HomePages} />
        <Route exact={true} path="/shop" component={ShopPages} />
        <Route exact={true} path="/test" component={TestPages} />
        <Route exact={true} path="/cut" component={CutPages} />
      </Switch>
    </div>
  );
}

export default App;
