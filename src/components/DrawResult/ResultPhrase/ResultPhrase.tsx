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
    <div className={classname(styles.main, hidden ? globalStyles.hidden : globalStyles.visible)}>
      <p className="select-phrase">
        <b>{value}</b> a été tiré(e) au sort !
      </p>
    </div>
  )
}
export default ResultPhrase
