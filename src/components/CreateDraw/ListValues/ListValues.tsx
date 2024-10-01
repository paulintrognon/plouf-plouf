import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './ListValues.module.css'
import { drawSlice } from '../../../store/features/draw/draw.slice'
import { RootState } from '../../../store/store'
import Value from '../../Shared/Value/Value'

const ListValues = () => {
  const dispatch = useDispatch()
  const values = useSelector((rootState: RootState) => rootState.draw.draw.values)

  /**
   * When clicking the red cross on a value, it sends a remove action with the index of clicked value
   */
  const handleRemove = (valueClickedIndex: number): void => {
    dispatch(drawSlice.actions.removeValue(valueClickedIndex))
  }

  const handleReset = (): void => {
    if (!confirm('Êtes-vous sûr de vouloir tout supprimer ?')) {
      return
    }
    dispatch(drawSlice.actions.reset())
  }

  /**
   * If no values have been entered yet, we return an empty div
   */
  if (values.length === 0) {
    return <div className={styles.container} />
  }

  return (
    <div className={styles.container}>
      <div>
        <button
          type="button"
          onClick={handleReset}
          className={styles.resetButton}
          data-cy="ListValues_resetButton"
          title="Cliquer ici pour recommencer un nouveau tirage de zéro."
        >
          Tout supprimer
        </button>
      </div>
      <div className={styles.list}>
        {values.map((value, index) => (
          <Value key={index} index={index} value={value} onRemove={handleRemove}></Value>
        ))}
      </div>
    </div>
  )
}

export default ListValues
