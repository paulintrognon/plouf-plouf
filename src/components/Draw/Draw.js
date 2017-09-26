import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAction, drawAction, restartAction, startAnimationAction } from '../../actions/drawActions';
import config from 'config';

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
        {this.renderButtons(this.props)}
      </div>
    )
  }

  renderContent(props) {
    const { animation, draw, fetching, error } = props.draw;

    if (fetching) {
      return (
        <p>
          <i className='fa fa-spinner' aria-hidden="true"></i>
          Tirage au sort...
        </p>
      );
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
    const draw = props.draw.draw;
    if (!draw) {
      return;
    }
    const visibilityClass = props.draw.animation.selectWinner ? 'visible' : 'hidden';
    return (
      <div className={'result '+visibilityClass}>
        <p className="select-phrase">
          <b>{draw.drawnValue}</b> a été tiré au sort !
        </p>
      </div>
    );
  }

  renderButtons(props) {
    const draw = props.draw.draw;
    if (!draw) {
      return;
    }
    const visibilityClass = props.draw.animation.finished ? 'visible' : 'hidden';
    return (
      <div className={'buttons '+visibilityClass}>
        <p className="share">
          Partager le résultat :
          <input type="text" defaultValue={`${config.host}/d/${draw.slug}`} onFocus={this.handleFocus} />
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
    if (draw.drawnValue === value && animation.selectWinner) {
      classes += ' drop selected';
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
