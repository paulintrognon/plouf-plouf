import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import AddValueForm from '../Values/AddValueForm';

class Home extends Component {
  render() {
    return (
      <div>
        <AddValueForm></AddValueForm>
      </div>
    );
  }
}

export default Home;
