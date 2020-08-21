import React, { useRef } from 'react'
import Value from '../../Value/Value'
import Animation from '../../../redux/features/animation/models/Animation'
import Values from '../../../redux/features/draw/models/Values'
import styles from './AnimatedValues.module.css'

interface Props {
  values: Values
  animation: Animation
}

const AnimatedValues: React.FunctionComponent<Props> = ({ values, animation }) => {
  const ref = useRef<HTMLDivElement>(null)
  if (!values) {
    return <div>Pas de valeurs.</div>
  }
  const isOverflowing = Boolean(ref.current && ref.current.scrollHeight > ref.current.offsetHeight)
  return (
    <div className={styles.main} ref={ref}>
      {values.map((value, index) => {
        const drop = animation.value === index
        const selected = animation.selectWinner && animation.value === index
        return (
          <Value
            drop={drop}
            selected={selected}
            key={index}
            value={value}
            index={index}
            scrollIntoView={isOverflowing}
          />
        )
      })}
    </div>
  )
}
export default AnimatedValues
