import React from 'react'
import classname from 'classnames'
import styles from './ResultPhrase.module.css'
import globalStyles from '../../styles.module.css'

interface Props {
  value: string
  hidden: boolean
}

const ResultPhrase: React.FunctionComponent<Props> = ({ value, hidden }) => {
  if (!value) {
    return null
  }
  return (
    <div
      className={classname(styles.main, hidden ? globalStyles.hidden : globalStyles.visible)}
      data-cy="ResultPhrase"
    >
      <p className="select-phrase">
        <b data-cy="ResultPhrase_value">{value}</b> a été tiré(e) au sort !
      </p>
    </div>
  )
}
export default ResultPhrase
