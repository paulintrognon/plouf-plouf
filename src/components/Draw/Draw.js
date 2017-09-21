import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch, startAnimation } from '../../actions/drawActions';

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

  componentDidUpdate() {
    if (this.props.draw.draw && !this.props.draw.animation.started && !this.props.draw.animation.finished) {
      this.props.dispatch(startAnimation(this.props.draw.draw));
    }
  }

  render() {
    const { animation, draw, fetching, error } = this.props.draw;

    if (fetching) {
      return <div className="container">Chargement...</div>;
    }

    if (error) {
      return <div className="container">{error.message}</div>
    }

    if (!draw) {
      return <div className="container">Tirage inconnu !</div>
    }

    return (
      <div className="container">
        {displayValues(draw, animation)}
      </div>
    )
  }
}

export default connect(mapStoreToProps)(Draw);

function displayValues(draw, animation) {
  return draw.values.map((value, i) => {
    let classes = 'value ' + (animation.values[i] ? 'drop ' : '');
    if (draw.drawnValue === value && animation.finished) {
      classes += ' selected';
    }
    return  (
      <div key={i} className={classes}>
        <span className="text">
          {value}
        </span>
      </div>
    );
  });
}
