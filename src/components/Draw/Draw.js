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

  componentDidMount() {
    this.startAnimation();
  }

  componentDidUpdate() {
    this.startAnimation();
  }

  startAnimation() {
    if (this.props.draw.draw && !this.props.draw.animation.started && !this.props.draw.animation.finished) {
      this.props.dispatch(startAnimation(this.props.draw.draw));
    }
  }

  render() {
    return (
      <div className="container draw">
        {this.renderContent(this.props)}
        {this.renderResult(this.props)}
      </div>
    )
  }

  renderContent(props) {
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

  handleFocus(event) {
    event.target.select();
  }

  renderResult(props) {
    if (!props.draw.animation.finished) {
      return;
    }
    const draw = props.draw.draw;
    return (
      <div className="result">
        <p className="select-phrase">
          <b>{draw.drawnValue}</b> a été sélectionné !
        </p>
        <p className="share">
          Partager:
          <input autoFocus type="text" defaultValue={`http://plouf-plouf/d/${draw.slug}`} onFocus={this.handleFocus} />
        </p>
        <p>
          <button type="button">Recommencer</button>
          <button type="button">Nouveau</button>
        </p>
      </div>
    );
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
