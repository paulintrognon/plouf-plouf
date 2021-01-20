import React from 'react'
import Value from '../../Shared/Value/Value'
import styles from './ListValues.module.css'
import Values from '../../../redux/features/draw/models/Values'

type Props = {
  values: Values
  onRemove: (index: number) => void
  onReset: () => void
}

const ListValues: React.FC<Props> = ({ values, onRemove, onReset }) => {
  /**
   * When clicking the red cross on a value, it sends a remove action with the index of clicked value
   */
  const handleRemove = (valueClickedIndex: number): void => {
    onRemove(valueClickedIndex)
  }

  const handleReset = (): void => {
    if (!confirm('Êtes-vous sûr de vouloir tout supprimer ?')) {
      return
    }
    onReset()
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
