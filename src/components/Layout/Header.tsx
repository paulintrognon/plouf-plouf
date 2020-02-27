import React from 'react'
import Link from 'next/link'
import styles from './Header.module.css'

const Header: React.FunctionComponent = () => (
  <header className={styles.main}>
    <nav className={styles.nav}>
      <h1 className={styles.brand}>
        <Link href="/">
          <a>
            <span>Plouf, </span>
            <span>Plouf !</span>
          </a>
        </Link>
      </h1>
    </nav>
  </header>
)

export default Header
