import { WithTranslation, withTranslation } from 'react-i18next'

import styles from './AddValueForm.module.css'
import AddValueInput from './AddValueInput/AddValueInput'

const AddValueForm: React.FC<WithTranslation> = ({ t }) => {
  return (
    <div className={styles.container}>
      <p className={styles.explanations1}>{t('home.form.add_element.help_text')}</p>
      <AddValueInput />
      <p className={styles.explanations2}>{t('home.form.add_element.button_help_text')}</p>
    </div>
  )
}
export default withTranslation()(AddValueForm)
