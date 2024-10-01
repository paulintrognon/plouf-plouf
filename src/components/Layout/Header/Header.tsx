import classnames from 'classnames'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

import styles from './Header.module.css'
import { RootState } from '../../../store/store'

const Header = () => {
  const animation = useSelector((state: RootState) => state.animation)

  return (
    <header className={styles.main}>
      <nav className={styles.nav}>
        <h1 className={styles.brand}>
          <Link href="/" className={styles.brandLink}>
            <span className={classnames({ [styles.drop]: animation.plouf1 })}>Plouf, </span>
            <span className={classnames({ [styles.drop]: animation.plouf2 })}>Plouf !</span>
          </Link>
        </h1>
      </nav>
    </header>
  )
}

export default Header
