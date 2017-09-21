import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAction, drawAction, restartAction, startAnimationAction } from '../../actions/drawActions';

import './draw.css';

function mapStoreToProps(store) {
  return {
    draw: store.draw,
  };
}

class Draw extends Component {
  componentWillMount() {
    if (!this.props.draw.draw) {
      this.props.dispatch(fetchAction(this.props.match.params.slug));
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
      this.props.dispatch(startAnimationAction(this.props.draw.draw));
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

  restart() {
    this.props.dispatch(restartAction());
  }

  redraw() {
    this.props.dispatch(drawAction(this.props.draw.draw.values));
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
          <button className="button" type="button" onClick={this.redraw.bind(this)}>
            <i className="icon fa fa-random" aria-hidden="true"></i>
            Autre résultat
          </button>
          <button className="button" type="button" onClick={this.restart.bind(this)}>
            <i className="icon fa fa-plus" aria-hidden="true"></i>
            Nouveau
          </button>
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
