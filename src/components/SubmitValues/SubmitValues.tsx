import React from 'react'
import styles from './SubmitValues.module.css'
import Values from '../../redux/features/draw/models/Values'

interface Props {
  values: Values
  onSubmit: () => void
}

export const SubmitValues: React.FunctionComponent<Props> = props => {
  const { values, onSubmit } = props

  const handleSubmit = () => {
    onSubmit()
  }

  return (
    <p className={styles.container}>
      <button
        className={styles.button}
        type="button"
        disabled={values.length < 2}
        onClick={handleSubmit}
      >
        Tirer au sort
      </button>
    </p>
  )
}

export default SubmitValues
