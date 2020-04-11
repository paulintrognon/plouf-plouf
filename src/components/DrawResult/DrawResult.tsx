import React from 'react'
import AnimatedValues from './AnimatedValues/AnimatedValues'
import Draw from '../../redux/features/draw/models/Draw'
import Animation from '../../redux/features/animation/models/Animation'
import styles from './DrawResult.module.css'
import ResultPhrase from './ResultPhrase/ResultPhrase'
import ActionButtons from './ActionButtons/ActionButtons.connect'
import Head from 'next/head'

export interface Props {
  draw: Draw
  animation: Animation
  slug: string
  handleLoadFromSlug: (slug: string) => void
  handleStartAnimation: () => void
}

export const DrawResult: React.FunctionComponent<Props> = ({
  draw,
  animation,
  slug,
  handleStartAnimation,
  handleLoadFromSlug,
}) => {
  // If the draw has not been loaded yet
  if (!draw.values.length) {
    // If we have a slug, we trigged the load
    if (!draw.values.length && slug) {
      handleLoadFromSlug(slug)
    }
    return null
  }

  // If the animation has not started yet and has not run yet, we start it
  if (!animation.started && !animation.ended) {
    handleStartAnimation()
  }

  if (draw.drawnIndex === null) {
    return null
  }

  const value = draw.values[draw.drawnIndex]

  return (
    <div className={styles.main}>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <AnimatedValues values={draw.values} animation={animation} />
      <ResultPhrase value={value} hidden={!animation.selectWinner} />
      <ActionButtons slug={slug} hidden={!animation.ended} />
    </div>
  )
}

export default DrawResult
