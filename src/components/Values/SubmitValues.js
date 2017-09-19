import React from 'react';
import { connect } from 'react-redux';
import { draw } from '../../actions/drawActions';

import './submitValues.css';

function mapStoreToProps(store) {
  return {
    draw: store.draw,
    values: store.values,
  };
}

class SubmitValues extends React.Component {

  handleSubmit() {
    this.props.dispatch(draw(this.props.values));
  }

  render() {
    const values = this.props.values;

    if (this.props.draw.fetching) {
      return (
        <p>
          Fetching...
        </p>
      );
    }

    return (
      <p className="submit-container">
        <button className="submit-button" type="button" disabled={values.length < 2} onClick={this.handleSubmit.bind(this)}>
          Valide !
        </button>
      </p>
    );
  }
}
export default connect(mapStoreToProps)(SubmitValues);
