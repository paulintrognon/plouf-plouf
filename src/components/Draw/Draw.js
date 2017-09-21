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
    return (
      <div className="container draw">
        {renderContent(this.props)}
      </div>
    )
  }
}

export default connect(mapStoreToProps)(Draw);

function renderContent(props) {
  const { animation, draw, fetching, error } = props.draw;

  if (fetching) {
    return 'Chargement...';
  }

  if (error) {
    return error.message;
  }

  if (!draw) {
    return 'Tirage inconnu !';
  }

  return displayValues(draw, animation);
}

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
