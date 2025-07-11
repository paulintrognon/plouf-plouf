import Link from 'next/link'
import React from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'

import styles from './Footer.module.css'

const Footer: React.FC<WithTranslation> = ({ t }) => (
  <footer className={styles.container}>
    <div className={styles.blueBackground}>
      <nav className={styles.nav}>
        <Link href="/a-propos">{t('footer.about')}</Link>{' '}
      </nav>
      <div className={styles.bottomLinks}>
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
          title={t('footer.made_by')}
        >
          {t('footer.made_by_name')} {new Date().getFullYear()}
        </a>{' '}
        -{' '}
        <a
          href="https://github.com/paulintrognon/plouf-plouf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-github" aria-hidden="true"></i>
          &nbsp;{t('footer.code_source')}
        </a>{' '}
        -{' '}
        <a
          href="https://github.com/paulintrognon/plouf-plouf/issues"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-bug" aria-hidden="true"></i>
          &nbsp;{t('footer.bugs_and_suggestions')}
        </a>
      </div>
    </div>
  </footer>
)
export default withTranslation()(Footer)
