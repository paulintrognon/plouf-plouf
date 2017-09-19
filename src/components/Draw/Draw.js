import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch } from '../../actions/drawActions';

function mapStoreToProps(store) {
  return {
    draw: store.draw,
  };
}

class Draw extends Component {
  componentWillMount() {
    if (!this.props.draw) {
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
