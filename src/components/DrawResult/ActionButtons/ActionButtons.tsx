import React from 'react'
import classnames from 'classnames'
import styles from './ActionButtons.module.css'
import globalStyles from '../../styles.module.css'

interface Props {
  slug: string
  hidden: boolean
}

const ActionButtons: React.FunctionComponent<Props> = ({ slug, hidden }) => {
  return (
    <div className={classnames(styles.main, hidden ? globalStyles.hidden : globalStyles.visible)}>
      <label className="share">
        Partager le résultat :
        <input
          type="text"
          className={styles.shareInput}
          defaultValue={`https://plouf-plouf.fr/d/${slug}`}
          onFocus={e => e.target.select()}
        />
      </label>
      <p className={styles.share}>
        <button className={styles.button} type="button">
          <i className={classnames('fa fa-long-arrow-left', styles.icon)} aria-hidden="true"></i>
          Modifier
        </button>
        <button className={styles.button} type="button">
          <i className={classnames('fa fa-random', styles.icon)} aria-hidden="true"></i>
          Autre résultat
        </button>
        <button className={styles.button} type="button">
          <i className={classnames('fa fa-plus', styles.icon)} aria-hidden="true"></i>
          Nouveau
        </button>
      </p>
    </div>
  )
}
export default ActionButtons
