import React from 'react'
import styles from './Value.module.css'
import classnames from 'classnames'

type Props = {
  value: string
  index: number
  onRemove?: (index: number) => void
  drop?: boolean
  selected?: boolean
}

const Value: React.FunctionComponent<Props> = ({ value, index, onRemove, drop, selected }) => {
  const handleRemove = () => {
    if (onRemove) {
      onRemove(index)
    }
  }

  return (
    <div
      data-cy="Value"
      className={classnames(styles.value, { [styles.drop]: drop, [styles.selected]: selected })}
    >
      <span className={styles.text}>{value}</span>
      {onRemove && (
        <span
          className={styles.cross}
          onClick={handleRemove}
          title="Cliquez ici pour supprimer une valeur"
        >
          <i data-cy="Value_remove" className="fa fa-times" aria-hidden="true"></i>
        </span>
      )}
    </div>
  )
}
export default Value
