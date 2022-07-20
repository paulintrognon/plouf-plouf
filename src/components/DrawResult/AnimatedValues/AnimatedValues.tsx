import React, { useRef } from 'react'

import Animation from '../../../redux/features/animation/models/Animation'
import Values from '../../../redux/features/draw/models/Values'
import Value from '../../Shared/Value/Value'
import styles from './AnimatedValues.module.css'

// from https://stackoverflow.com/a/22480938
function isScrolledIntoView(el: HTMLElement): boolean {
  const rect = el.getBoundingClientRect()
  const elemTop = rect.top
  const elemBottom = rect.bottom
  return elemTop >= 0 && elemBottom <= window.innerHeight
}

interface AnimatedValuesProps {
  values: Values
  animation: Animation
}
const AnimatedValues = ({ values, animation }: AnimatedValuesProps) => {
  const ref = useRef<HTMLDivElement>(null)
  if (!values) {
    return <div>Pas de valeurs.</div>
  }
  const scrollIntoView = Boolean(ref.current && !isScrolledIntoView(ref.current))
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
            scrollIntoView={scrollIntoView}
          />
        )
      })}
    </div>
  )
}
export default AnimatedValues
