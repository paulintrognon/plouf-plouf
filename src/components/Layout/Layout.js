import React from 'react';

import './layout.css';
import Header from './Header.js';
import Footer from './Footer.js';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div className="content-container">
          {this.props.children}
        </div>
        <Footer></Footer>
      </div>
    )
  }
}
