import React from 'react';
import { connect } from 'react-redux';
import { removeValue } from '../../actions/valuesActions';

import '../../styles/values.css';

class Value extends React.Component {
  handleRemove() {
    this.props.dispatch(removeValue(this.props.index));
  }

  render() {
    return (
      <div className="value">
        <span className="text">
          {this.props.value}
        </span>
        <span className="cross" onClick={this.handleRemove.bind(this)}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </span>
      </div>
    );
  }
}
export default connect()(Value);
