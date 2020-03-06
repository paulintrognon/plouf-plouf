import React from 'react'

import styles from './Footer.module.css'

const Footer: React.FunctionComponent = () => (
  <footer className={styles.main}>
    <a
      href="https://fr.wikipedia.org/wiki/Copyleft"
      target="_blank"
      rel="noopener noreferrer"
      title="Copyleft"
    >
      (ɔ)
    </a>{' '}
    <a
      href="https://paulintrognon.fr"
      target="_blank"
      rel="noopener noreferrer"
      title="Site réalisé par Paulin Trognon"
    >
      Paulin Trognon 2020
    </a>{' '}
    -{' '}
    <a
      href="https://github.com/paulintrognon/plouf-plouf"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fa fa-github" aria-hidden="true"></i>
      &nbsp;Code source
    </a>{' '}
    -{' '}
    <a
      href="https://github.com/paulintrognon/plouf-plouf/issues"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fa fa-bug" aria-hidden="true"></i>
      &nbsp;Bugs &amp; suggestions
    </a>
  </footer>
)
export default Footer
