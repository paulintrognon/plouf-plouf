import React from 'react';
import { connect } from 'react-redux';
import { addValue } from '../../actions/valuesActions';

import './addValueForm.css';

class AddValueForm extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  handleChange(event) {
    const value = event.target.value;
    let newValue = value;

    const i = value.indexOf(',');
    if(i !== -1) {
      this.sendValue(value.slice(0, i));
      newValue = '';
    }

    this.setState({ text: newValue });
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.sendValue(event.target.value);
      this.setState({ text: '' });
    }
  }

  sendValue(value) {
    const trimedValue = value.trim();
    if (!trimedValue.length) {
      return;
    }
    this.props.dispatch(addValue(trimedValue));
  }

  render() {
    return (
      <div className="create-draw">
        <p className="explanations">
          Liste les éléments à tirer au sort...
        </p>
        <p className="input-container">
          <input type="text"
            autoFocus
            placeholder="Ex: Pomme, Poire"
            onChange={this.handleChange.bind(this)}
            onKeyPress={this.handleKeyPress.bind(this)}
            value={this.state.text}
            />
        </p>
      </div>
    );
  }
}
export default connect()(AddValueForm);
