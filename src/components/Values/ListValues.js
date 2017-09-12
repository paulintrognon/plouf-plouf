import React from 'react';
import { connect } from 'react-redux';
import { removeValue } from '../../actions/valuesActions';

import './listValues.css';

function mapStoreToProps(store) {
  return {
    values: store.values,
  };
}

class ListValues extends React.Component {

  handleRemove(i) {
    this.props.dispatch(removeValue(i));
  }

  render() {
    const values = this.props.values;
    return (
      <div className="list-values">
        {values.map((value, index) => <li key={index}>{value}</li>)}
      </div>
    );
  }
}
export default connect(mapStoreToProps)(ListValues);
