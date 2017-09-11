import React from 'react';
import { connect } from 'react-redux';
import { addValue } from '../../actions/valuesActions';

import './home.css';

function mapStoreToProps(store) {
  return {
    values: store.values,
  };
}

class Home extends React.Component {
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
      this.props.dispatch(addValue(value.slice(0, i)));
      newValue = '';
    }

    this.setState({ text: newValue });
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.props.dispatch(addValue(event.target.value));
      this.setState({ text: '' });
    }
  }

  render() {
    const values = this.props.values;
    return (
      <div className="create-draw">
        <p className="explanations">
          Entre différents éléments séparés d'une virgule,
          et clique sur "go" pour en sélectionner un au hasard !
        </p>
        <p className="input-container">
          <input type="text"
            placeholder="Ex: Pomme, Poire"
            onChange={this.handleChange.bind(this)}
            onKeyPress={this.handleKeyPress.bind(this)}
            value={this.state.text}
            />
        </p>
        <ul>
          {values.map((value, index) => <li key={index}>{value}</li>)}
        </ul>
      </div>
    );
  }
}
export default connect(mapStoreToProps)(Home);
