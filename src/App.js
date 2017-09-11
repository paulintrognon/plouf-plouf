import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from './components/Layout/Layout.js';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          hello world
        </Layout>
      </Router>
    );
  }
}

export default App;
