import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';

// redux
import { Provider } from 'react-redux';

// redux-persist
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

// context
import PeopleProvider from './providers/people/people.provider';

ReactDOM.render(
  <React.StrictMode>

    <Provider store={store} >
      <PeopleProvider>
      <BrowserRouter>
        <PersistGate persistor={persistor} >
          <App />
        </PersistGate>
      </BrowserRouter>
      </PeopleProvider>
    </Provider>

  </React.StrictMode>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
