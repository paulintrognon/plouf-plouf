import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import AddValueForm from '../Values/AddValueForm';
import ListValues from '../Values/ListValues';

class Home extends Component {
  render() {
    return (
      <div>
        <AddValueForm></AddValueForm>
        <ListValues></ListValues>
      </div>
    );
  }
}

export default Home;
