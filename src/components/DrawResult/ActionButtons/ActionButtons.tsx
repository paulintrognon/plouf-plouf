import classnames from 'classnames'
import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'

import { drawValueAndStartAnimation, reinsertValuesAndBack, reinsertValuesAndSave } from '../../../store/features/draw/draw.service'
import { RootState } from '../../../store/store'
import globalStyles from '../../styles.module.css'
import styles from './ActionButtons.module.css'

interface ActionButtonsProps {
  slug: string
  hidden: boolean
}
const ActionButtons = ({ slug, hidden }: ActionButtonsProps) => {
  const router = useRouter()
  const draw = useSelector((state: RootState) => state.draw)

  if (draw.hasError || !draw.draw.values || draw.draw.drawnIndex === null) {
    return null
  }

  const handleRedoWithoutDrawnValue = (): void => {
    if (draw.draw.drawnIndex === null) {
      return
    }
    // Save drawn value...
    const newDrawnValues = [...draw.draw.previousValues, draw.draw.values[draw.draw.drawnIndex]]
    // ...then remove it from values
    const newValues = draw.draw.values.filter((v: string, i: number) => i !== draw.draw.drawnIndex)
    drawValueAndStartAnimation(newValues, newDrawnValues)
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
          onClick={() => reinsertValuesAndBack(draw.draw) }
        >
          <i className={classnames('fa fa-long-arrow-left', styles.icon)} aria-hidden="true"></i>
          Modifier
        </button>
        {draw.draw.previousValues.length > 0 ? (
          <button
            data-cy="ActionButtons_reinsertButton"
            className={styles.button}
            type="button"
            onClick={() => reinsertValuesAndSave(draw.draw) }
          >
            <i className={classnames('fa fa-repeat', styles.icon)} aria-hidden="true"></i>
            Réinsérer toutes
          </button>
        ) : null}
        <button
          data-cy="ActionButtons_restartButton"
          className={styles.button}
          type="button"
          onClick={() => drawValueAndStartAnimation(draw.draw.values, draw.draw.previousValues)}
        >
          <i className={classnames('fa fa-random', styles.icon)} aria-hidden="true"></i>
          Refaire
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
