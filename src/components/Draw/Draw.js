import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch } from '../../actions/drawActions';

import './draw.css';

function mapStoreToProps(store) {
  return {
    draw: store.draw,
  };
}

class Draw extends Component {
  componentWillMount() {
    if (!this.props.draw.draw) {
      this.props.dispatch(fetch(this.props.match.params.slug));
    }
  }

  render() {
    const { draw, fetching, error } = this.props.draw;

    if (fetching) {
      return <div>Chargement...</div>;
    }

    if (error) {
      return <div>{error.message}</div>
    }

    if (!draw) {
      return <div>Tirage inconnu !</div>
    }

    let plouf1 = 'plouf ';
    let plouf2 = 'plouf ';

    return (
      <div className="container">
        <p className="ploufs">
          <span className={plouf1}>Plouf, </span>
          <span className={plouf2}>Plouf !</span>
        </p>
      </div>
    );

    return <ul>
      {displayValues(draw)}
    </ul>
  }
}

export default connect(mapStoreToProps)(Draw);

function displayValues(draw) {
  return draw.values.map((value, i) => {
    return <li key={i} style={draw.drawnValue === value ? {fontWeight: 'bold'} : {}}>
        {value}
    </li>;
  });
}
