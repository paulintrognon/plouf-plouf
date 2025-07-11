import React from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import styles from './SubmitValues.module.css'
import { drawValueAndStartAnimation } from '../../../store/features/draw/draw.service'
import { RootState } from '../../../store/store'
import Button from '../../Shared/Button/Button'

export const SubmitValues: React.FC<WithTranslation> = ({ t }) => {
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
            ? t('home.form.submit_button.error_message')
            : t('home.form.submit_button.success_message')
        }
      >
        {t('home.form.submit_button.text')}
      </Button>
    </p>
  )
}

export default withTranslation()(SubmitValues)
