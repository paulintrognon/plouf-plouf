import React from 'react'
import Draw from '../../models/Draw'
import DrawAnimation from '../../models/DrawAnimation'
import Value from '../Value/Value'

export interface Props {
  draw: Draw
  animation: DrawAnimation
  slug: string
  handleLoadFromSlug: (slug: string) => {}
  handleStartAnimation: () => {}
}

export const DrawResult: React.FunctionComponent<Props> = ({
  draw,
  animation,
  handleStartAnimation,
  handleLoadFromSlug,
  slug,
}) => {
  if (slug && !draw.values.length) {
    handleLoadFromSlug(slug)
  }
  if (draw.values && draw.values.length && !animation.started) {
    handleStartAnimation()
  }
  return (
    <div>
      {draw.values &&
        draw.values.map((value, index) => <Value key={index} value={value} index={index} />)}
    </div>
  )
}

export default DrawResult
