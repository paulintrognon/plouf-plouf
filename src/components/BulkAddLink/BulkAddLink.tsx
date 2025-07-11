import { WithTranslation, withTranslation } from 'react-i18next'

import styles from './BulkAddLink.module.css'
import A from '../Shared/A/A'

const BulkAddLink: React.FC<WithTranslation> = ({ t }) => {
  return (
    <div className={styles.container}>
      <p>ou</p>
      <p>
        <A href="/import" data-cy="BulkAddLink">
          {t('home.bulk_add_link')}
        </A>
      </p>
    </div>
  )
}
export default withTranslation()(BulkAddLink)
