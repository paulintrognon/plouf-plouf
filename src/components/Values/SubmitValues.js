import React from 'react';
import { connect } from 'react-redux';
import { drawAction } from '../../actions/drawActions';

import './submitValues.css';

function mapStoreToProps(store) {
  return {
    draw: store.draw,
    values: store.values,
  };
}

class SubmitValues extends React.Component {

  handleSubmit() {
    this.props.dispatch(drawAction());
  }

  render() {
    const values = this.props.values;

    let btnText = 'Tirer au sort';

    return (
      <p className="submit-container">
        <button
          className="submit-button"
          type="button"
          disabled={values.length < 2}
          onClick={this.handleSubmit.bind(this)}
          >
            {btnText}
        </button>
      </p>
    );
  }
}
export default connect(mapStoreToProps)(SubmitValues);
