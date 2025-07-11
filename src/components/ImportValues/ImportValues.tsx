import { useRouter } from 'next/router'
import { useState } from 'react'
import { Trans, WithTranslation, withTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import styles from './ImportValues.module.css'
import { drawSlice } from '../../store/features/draw/draw.slice'
import { importValuesFromString } from '../../store/features/draw/helpers/importValuesFromString'
import { RootState } from '../../store/store'
import A from '../Shared/A/A'
import Button from '../Shared/Button/Button'

const ImportValues: React.FC<WithTranslation> = ({ t }) => {
  const router = useRouter()
  const values = useSelector((state: RootState) => state.draw.draw.values)
  const dispatch = useDispatch()

  const [importText, setImportText] = useState(values.join('\n'))

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setImportText(event.target.value)
  }

  const handleSubmit = (): void => {
    dispatch(drawSlice.actions.importValues(importText))
    setImportText('')
    router.push('/')
  }

  const nbElements = importValuesFromString(importText).length

  return (
    <div className={styles.container}>
      <div className={styles.explanations}>
        <Trans
          i18nKey="home.import_values.explanations"
          components={{
            Heading: <h2 className={styles.explanation1}>no content</h2>,
            Paragraph: <p />,
          }}
        />
      </div>
      <textarea
        data-cy="ImportValues_importTextInput"
        className={styles.textarea}
        value={importText}
        onChange={handleTextareaChange}
        placeholder={t('home.import_values.placeholder')}
      />
      <p>{t('home.import_values.detected_elements', { count: nbElements })}</p>
      <p className={styles.submitContainer}>
        <Button
          color="blue"
          className={styles.submitButton}
          onClick={handleSubmit}
          data-cy="ImportValues_submit"
        >
          {t('home.import_values.submit_button')}
        </Button>
      </p>
      <p className={styles.cancelContainer} data-cy="ImportValues_cancel">
        <A href="/">{t('home.import_values.cancel_button')}</A>
      </p>
    </div>
  )
}
export default withTranslation()(ImportValues)
