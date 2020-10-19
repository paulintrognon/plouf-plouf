import React from 'react'
import Link from 'next/link'
import classnames from 'classnames'
import styles from './Header.module.css'
import Animation from '../../../redux/features/animation/models/Animation'

interface Props {
  animation: Animation
}

const Header: React.FunctionComponent<Props> = ({ animation }) => (
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
