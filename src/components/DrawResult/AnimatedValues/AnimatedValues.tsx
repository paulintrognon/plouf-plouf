import React, { useRef } from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'

import styles from './AnimatedValues.module.css'
import Animation from '../../../store/features/animation/types/Animation.type'
import Values from '../../../store/features/draw/types/Values.type'
import Value from '../../Shared/Value/Value'

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
const AnimatedValues: React.FC<WithTranslation & AnimatedValuesProps> = ({
  t,
  values,
  animation,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  if (!values) {
    return <div>{t('result.animated_values.no_values')}</div>
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
export default withTranslation()(AnimatedValues)
