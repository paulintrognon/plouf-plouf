import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './ImportValues.module.css'
import { drawSlice } from '../../store/features/draw/draw.slice'
import { importValuesFromString } from '../../store/features/draw/helpers/importValuesFromString'
import { RootState } from '../../store/store'
import A from '../Shared/A/A'
import Button from '../Shared/Button/Button'

const placeholder = `Exemple :
Margot
Paul
Richard
Clémence`

const ImportValues = () => {
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
        <h2 className={styles.explanation1}>
          Entrez les éléments à tirer au sort, séparés par des sauts à la ligne.
        </h2>
        <p>
          Si vous importez depuis LibreOffice, OpenOffice ou Excel, copiez la colonne entière depuis
          le tableur, et collez la ci-dessous.
        </p>
      </div>
      <textarea
        data-cy="ImportValues_importTextInput"
        className={styles.textarea}
        value={importText}
        onChange={handleTextareaChange}
        placeholder={placeholder}
      />
      <p>
        {nbElements === 1 ? `${nbElements} élément détecté` : null}
        {nbElements > 1 ? `${nbElements} éléments détectés` : null}
      </p>
      <p className={styles.submitContainer}>
        <Button
          color="blue"
          className={styles.submitButton}
          onClick={handleSubmit}
          data-cy="ImportValues_submit"
        >
          Importer
        </Button>
      </p>
      <p className={styles.cancelContainer} data-cy="ImportValues_cancel">
        <A href="/">Annuler</A>
      </p>
    </div>
  )
}
export default ImportValues
