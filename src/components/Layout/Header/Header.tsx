import classnames from 'classnames'
import Link from 'next/link'
import React from 'react'

import Animation from '../../../redux/features/animation/models/Animation'
import styles from './Header.module.css'

interface HeaderProps {
  animation: Animation
}

const Header = ({ animation }: HeaderProps) => (
  <header className={styles.main}>
    <nav className={styles.nav}>
      <h1 className={styles.brand}>
        <Link href="/">
          <a className={styles.brandLink}>
            <span className={classnames({ [styles.drop]: animation.plouf1 })}>Plouf, </span>
            <span className={classnames({ [styles.drop]: animation.plouf2 })}>Plouf !</span>
          </a>
        </Link>
      </h1>
    </nav>
  </header>
)

export default Header
