import React,{lazy, Suspense} from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';

import HomePages from './pages/homepages/homepages.component';
import Header from './components/header/header.component';
import BizChartsPages from './pages/bizChartspages/bizChartspages.component';
import SlickPages from './pages/slickpages/slickpages.component';

// Lazy+Suspense
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import Spinner from './components/spinner/spinner.component';

import { GlobalStyled } from './global.styles';

// lazy示例
const ExamplePages = lazy( ()=>import('./pages/examplepages/example.component') );

function App() {

  return (
    <div className="App">
      <Header />
      <GlobalStyled />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />} >
            <Route exact={true} path="/" component={BizChartsPages} />
            <Route exact={true} path="/example" component={ExamplePages} />
            <Route exact={true} path="/bizcharts" component={BizChartsPages} />
            <Route exact={true} path="/slick" component={SlickPages} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}

export default App;
