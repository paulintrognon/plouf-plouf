import React from 'react'
import classnames from 'classnames'
import styles from './ActionButtons.module.css'
import globalStyles from '../../styles.module.css'
import { DrawState } from '../../../redux/features/draw/reducer'

interface Props {
  slug: string
  hidden: boolean
  draw: DrawState
  handleOtherResult: () => void
  handleBack: () => void
  removeValueAction: (index: number) => void
}

const ActionButtons: React.FunctionComponent<Props> = ({
  slug,
  draw,
  hidden,
  removeValueAction,
  handleOtherResult,
  handleBack,
}) => {
  if (draw.hasError || !draw.draw.values || draw.draw.drawnIndex === null) {
    return null
  }

  const handleRedoWithoutDrawnValue = (): void => {
    if (draw.draw.drawnIndex === null) {
      return
    }
    removeValueAction(draw.draw.drawnIndex)
    handleOtherResult()
  }

  const value = draw.draw.values[draw.draw.drawnIndex]

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
        {draw.draw.values.length > 2 ? (
          <button
            data-cy="ActionButtons_restartWithoutSelectedValueButton"
            className={styles.button}
            type="button"
            onClick={handleRedoWithoutDrawnValue}
          >
            <i className={classnames('fa fa-eraser', styles.icon)} aria-hidden="true"></i>
            Refaire sans &quot;{value}&quot;
          </button>
        ) : null}
      </p>
    </div>
  )
}
export default ActionButtons
