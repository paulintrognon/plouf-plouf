import React from 'react'
import styles from './SubmitValues.module.css'
import Values from '../../redux/features/draw/models/Values'

interface Props {
  values: Values
  onSubmit: () => void
}

export const SubmitValues: React.FunctionComponent<Props> = props => {
  const { values, onSubmit } = props
  const canSubmit = values.length >= 2

  const handleSubmit = () => {
    onSubmit()
  }

  return (
    <p className={styles.container}>
      <button
        className={styles.button}
        type="button"
        disabled={!canSubmit}
        onClick={handleSubmit}
        title={
          !canSubmit && 'Vous devez inscrire au moins deux valeurs avant de pouvoir tirer au sort.'
        }
      >
        Tirer au sort
      </button>
    </p>
  )
}

export default SubmitValues
