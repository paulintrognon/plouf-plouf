import React from 'react';
import { connect } from 'react-redux';
import { addValue } from '../../actions/valuesActions';
import { drawAction } from '../../actions/drawActions';

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
    if (event.key !== 'Enter') {
      return;
    }
    if (!this.state.text) {
      this.props.dispatch(drawAction());
      return;
    }
    this.sendValue(event.target.value);
    this.setState({ text: '' });
  }

  handleAdd() {
    this.sendValue(this.state.text);
    this.setState({ text: '' });
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
            className="text-input"
            autoFocus
            placeholder="Ex: Pomme [enter] Poire [enter]"
            onChange={this.handleChange.bind(this)}
            onKeyPress={this.handleKeyPress.bind(this)}
            value={this.state.text}
            />
          <button className="add-input" onClick={this.handleAdd.bind(this)}>
            <i className="fa fa-plus" aria-hidden="true"></i>
          </button>
        </p>
      </div>
    );
  }
}
export default connect()(AddValueForm);
