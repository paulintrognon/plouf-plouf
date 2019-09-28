import React from 'react';

import './footer.css';

export default function () {
  return (
    <footer className="main-footer">
      <a href="https://paulintrognon.fr" target="_blank" rel="noopener noreferrer">
        (ɔ) Paulin Trognon 2019
      </a>
      {' '}-{' '}
      <a href="https://github.com/paulintrognon/plouf-plouf" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-github" aria-hidden="true"></i>
        &nbsp;Code source
      </a>
      {' '}-{' '}
      <a href="https://github.com/paulintrognon/plouf-plouf/issues" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-bug" aria-hidden="true"></i>
        &nbsp;Bugs &amp; suggestions
      </a>
    </footer>
  )
}
