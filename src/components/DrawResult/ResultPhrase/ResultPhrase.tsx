import classname from 'classnames'
import React from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'

import styles from './ResultPhrase.module.css'
import globalStyles from '../../styles.module.css'

interface ResultPhraseProps {
  value: string
  hidden: boolean
}

const ResultPhrase: React.FC<WithTranslation & ResultPhraseProps> = ({ t, value, hidden }) => {
  if (!value) {
    return null
  }
  return (
    <div
      className={classname(styles.main, hidden ? globalStyles.hidden : globalStyles.visible)}
      data-cy="ResultPhrase"
    >
      <p className="select-phrase">
        <b data-cy="ResultPhrase_value">{value}</b> {t('result.selected_value')}
      </p>
    </div>
  )
}
export default withTranslation()(ResultPhrase)
