import React from 'react'
import classnames from 'classnames'
import styles from './ActionButtons.module.css'
import globalStyles from '../../styles.module.css'

interface Props {
  slug: string
  hidden: boolean
  handleOtherResult: () => {}
  handleBack: () => {}
}

const ActionButtons: React.FunctionComponent<Props> = ({
  slug,
  hidden,
  handleOtherResult,
  handleBack,
}) => {
  return (
    <div className={classnames(styles.main, hidden ? globalStyles.hidden : globalStyles.visible)}>
      <label className={styles.share}>
        Partager le résultat&nbsp;:
        <input
          data-cy="ActionButtons_shareInput"
          type="text"
          className={styles.shareInput}
          defaultValue={`https://plouf-plouf.fr/r#${slug}`}
          onFocus={e => e.target.select()}
        />
      </label>
      <p className={styles.buttons}>
        <button
          data-cy="ActionButtons_modifyButton"
          className={styles.button}
          type="button"
          onClick={handleBack}
        >
          <i className={classnames('fa fa-long-arrow-left', styles.icon)} aria-hidden="true"></i>
          Modifier
        </button>
        <button
          data-cy="ActionButtons_restartButton"
          className={styles.button}
          type="button"
          onClick={handleOtherResult}
        >
          <i className={classnames('fa fa-random', styles.icon)} aria-hidden="true"></i>
          Autre résultat
        </button>
      </p>
    </div>
  )
}
export default ActionButtons
