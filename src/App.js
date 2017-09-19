import React, { Component } from 'react';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';

import Layout from './components/Layout/Layout.js';
import Home from './components/Home/Home';
import Draw from './components/Draw/Draw';

import store from './store.js';

import history from './history';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Layout>
              <Route path="/" exact={true} component={Home}></Route>
              <Route path="/d/:slug" component={Draw}></Route>
          </Layout>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
