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
    this.props.dispatch(fetch(this.props.match.params.slug));
  }

  render() {
    const { draw, fetching, fetched, error } = this.props.draw;

    if (fetching) {
      return <div>Chargement...</div>;
    }

    if (error) {
      return <div>{error.message}</div>
    }

    if (fetched) {
      if (!draw) {
        return <div>Not found!</div>
      }
      return <ul>
        {draw.values.map(value => <li>{value}</li>)}
      </ul>
    }

    return (
      <div>
        wtf
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Draw);
