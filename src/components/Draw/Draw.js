import React, { Component } from 'react';


class Draw extends Component {
  render() {
    return (
      <div>
        {this.props.match.params.slug}
      </div>
    );
  }
}

export default Draw;
