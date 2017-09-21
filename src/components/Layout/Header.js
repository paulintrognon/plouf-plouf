import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import './header.css';
import '../../styles/plouf-plouf.css';

function mapStoreToProps(store) {
  return {
    animation: store.draw.animation,
  };
}

class Header extends Component {
  render() {
    let plouf1 = this.props.animation.plouf1 ? 'drop' : '';
    let plouf2 = this.props.animation.plouf2 ? 'drop' : '';

    return (
      <header className="main-header">
        <nav className="main-nav">
          <Link to={'/'} className="main-nav-brand">
            <span className={plouf1}>Plouf, </span>
            <span className={plouf2}>Plouf !</span>
          </Link>
        </nav>
      </header>
    )
  }
}

export default connect(mapStoreToProps)(Header);
