import classname from 'classnames'
import React from 'react'

import globalStyles from '../../styles.module.css'
import styles from './ResultPhrase.module.css'

interface ResultPhraseProps {
  value: string
  hidden: boolean
}

const ResultPhrase = ({ value, hidden }: ResultPhraseProps) => {
  if (!value) {
    return null
  }
  return (
    <div
      className={classname(styles.main, hidden ? globalStyles.hidden : globalStyles.visible)}
      data-cy="ResultPhrase"
    >
      <p className="select-phrase">
        <b data-cy="ResultPhrase_value">{value}</b> a été tiré(e) au sort&nbsp;!
      </p>
    </div>
  )
}
export default ResultPhrase
