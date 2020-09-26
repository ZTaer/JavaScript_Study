import React,{lazy, Suspense} from 'react';

/**
 * 第三方库
 */ 
import { Switch, Route } from 'react-router-dom';

/**
 * 本地组件
 */
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import Header from './components/header/header.component';
import HomePages from './pages/homepages/homepages.component';
import BkmItemPages from './pages/bkmItemPages/bkm-item-pages.component';

/**
 * css相关
 */
import './App.scss';
import { GlobalStyled } from './global.styles';


/**
 * 核心组件
 */
const ExamplePages = lazy( ()=>import('./pages/examplepages/example.component') );
const App = () => {

  return (
    <div className="App">
      <div style={{height:"80px", opacity:0}} > 临时填充导航栏 </div>
      <Header />
      <GlobalStyled />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />} >
            <Route exact={true} path="/" component={HomePages} />
            <Route exact={true} path="/bkm/:bkmItemId" component={BkmItemPages} />
            <Route exact={true} path="/example" component={ExamplePages} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}

export default App;
