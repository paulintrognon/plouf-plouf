import React from 'react'
import Value from '../../Value/Value'
import Animation from '../../../redux/features/animation/models/Animation'
import Values from '../../../redux/features/draw/models/Values'

interface Props {
  values: Values
  animation: Animation
}

const AnimatedValues: React.FunctionComponent<Props> = ({ values, animation }) => {
  if (!values) {
    return <div>Pas de valeurs.</div>
  }
  return (
    <div>
      {values.map((value, index) => {
        const drop = animation.value === index
        const selected = animation.selectWinner && animation.value === index
        return <Value drop={drop} selected={selected} key={index} value={value} index={index} />
      })}
    </div>
  )
}
export default AnimatedValues
