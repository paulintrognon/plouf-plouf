import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Layout from './components/Layout/Layout.js';
import Home from './components/Home/Home';
import Draw from './components/Draw/Draw';

import store from './store.js';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout>
            <Route path="/" exact={true} component={Home}></Route>
            <Route path="/d/:slug" component={Draw}></Route>
          </Layout>
        </Router>
      </Provider>
    );
  }
}

export default App;
