import React from 'react'
import styles from './Value.module.css'

type Props = {
  value: string
  index: number
  onRemove?: (index: number) => void
}

const Value: React.FunctionComponent<Props> = ({ value, index, onRemove }) => {
  const handleRemove = () => {
    onRemove(index)
  }

  return (
    <div className={styles.value}>
      <span className={styles.text}>{value}</span>
      {onRemove && (
        <span className={styles.cross} onClick={handleRemove}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </span>
      )}
    </div>
  )
}
export default Value
