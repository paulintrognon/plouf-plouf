import React from 'react';

import './home.css';

export default class Home extends React.Component {
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
      console.log(value.slice(0, i))
      newValue = '';
    }

    this.setState({ text: newValue });
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      console.log(event.target.value);
      this.setState({ text: '' });
    }
  }

  render() {
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
      </div>
    );
  }
}
