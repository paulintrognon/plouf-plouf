import classnames from 'classnames'
import React, { useRef } from 'react'

import styles from './Value.module.css'

type ValueProps = {
  value: string
  index: number
  onRemove?: (index: number) => void
  drop?: boolean
  selected?: boolean
  scrollIntoView?: boolean
}

const Value = ({ value, index, onRemove, drop, selected, scrollIntoView }: ValueProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const handleRemove = (): void => {
    if (onRemove) {
      onRemove(index)
    }
  }

  if (scrollIntoView && drop) {
    ref.current?.scrollIntoView({ block: 'center' })
  }

  return (
    <div
      ref={ref}
      data-cy="Value"
      data-cy-selected={selected ? 'Y' : 'N'}
      className={classnames(styles.value, {
        [styles.drop]: drop,
        [styles.selected]: selected,
      })}
    >
      <span className={styles.text}>{value}</span>
      {onRemove && (
        <button
          className={styles.cross}
          onClick={handleRemove}
          title="Cliquez ici pour supprimer une valeur"
        >
          <i data-cy="Value_remove" className="fa fa-times" aria-hidden="true"></i>
        </button>
      )}
    </div>
  )
}
export default Value
