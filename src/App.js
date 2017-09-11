import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout.js';
import Home from './components/Home/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Route path="/" exact={true} component={Home}></Route>
        </Layout>
      </Router>
    );
  }
}

export default App;
