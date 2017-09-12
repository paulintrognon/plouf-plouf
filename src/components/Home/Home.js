import React, { Component } from 'react';

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
