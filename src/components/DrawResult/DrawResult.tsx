import React from 'react'
import AnimatedValues from './AnimatedValues/AnimatedValues'
import { DrawState } from '../../redux/features/draw/reducer'
import Animation from '../../redux/features/animation/models/Animation'
import ResultPhrase from './ResultPhrase/ResultPhrase'
import ActionButtons from './ActionButtons/ActionButtons.connect'
import Head from 'next/head'
import styles from './DrawResult.module.css'

export interface Props {
  draw: DrawState
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
  // If error
  if (draw.hasError) {
    return (
      <div className={styles.error}>
        <p>
          <img src="/sad.jpg" />
        </p>
        <p>Impossible de charger le tirage au sort à partir de cette url...</p>
      </div>
    )
  }

  const { values, drawnIndex } = draw.draw

  // If the draw has not been loaded yet
  if (!values.length) {
    // If we have a slug, we trigged the load
    if (!values.length && slug) {
      handleLoadFromSlug(slug)
    }
    return null
  }

  // If the animation has not started yet and has not run yet, we start it
  if (!animation.started && !animation.ended) {
    handleStartAnimation()
  }

  if (drawnIndex === null) {
    return null
  }

  const value = values[drawnIndex]

  return (
    <div className={styles.main}>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <AnimatedValues values={values} animation={animation} />
      <ResultPhrase value={value} hidden={!animation.selectWinner} />
      <ActionButtons slug={slug} hidden={!animation.ended} />
    </div>
  )
}

export default DrawResult
