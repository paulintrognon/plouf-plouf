import React from 'react'
import { useSelector } from 'react-redux'

import styles from './SubmitValues.module.css'
import { drawValueAndStartAnimation } from '../../../store/features/draw/draw.service'
import { RootState } from '../../../store/store'
import Button from '../../Shared/Button/Button'

export const SubmitValues = () => {
  const values = useSelector((state: RootState) => state.draw.draw.values)

  const canSubmit = values.length >= 2

  const handleSubmit = (): void => {
    drawValueAndStartAnimation(values)
  }

  return (
    <p className={styles.container}>
      <Button
        color="green"
        data-cy="SubmitValues"
        className={styles.button}
        type="button"
        disabled={!canSubmit}
        onClick={handleSubmit}
        title={
          !canSubmit
            ? 'Vous devez inscrire au moins deux valeurs avant de pouvoir tirer au sort.'
            : 'Lancer le tirage au sort !'
        }
      >
        Tirer au sort
      </Button>
    </p>
  )
}

export default SubmitValues
