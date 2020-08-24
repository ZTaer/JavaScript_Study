import React, { Suspense, lazy } from 'react';

// react-router-dom
import { Route, Switch } from "react-router-dom";

// Lazy+Suspense
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import Spinner from './components/spinner/spinner.component';
const HomePages = lazy( ()=>import("./pages/homePages/homePages.component") );
const OtherPages = lazy( ()=>import("./pages/otherPages/otherPages.component") );

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />} >
            <Route exact={true} path="/" component={HomePages} />
            <Route exact={true} path="/other" component={OtherPages} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}

export default App;
