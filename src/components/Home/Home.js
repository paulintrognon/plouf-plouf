import React, { Component } from 'react';

import AddValueForm from '../Values/AddValueForm';
import ListValues from '../Values/ListValues';
import SubmitValues from '../Values/SubmitValues';

class Home extends Component {
  render() {
    return (
      <div>
        <AddValueForm></AddValueForm>
        <ListValues></ListValues>
        <SubmitValues></SubmitValues>
      </div>
    );
  }
}

export default Home;
