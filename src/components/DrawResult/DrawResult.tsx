import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ActionButtons from './ActionButtons/ActionButtons'
import AnimatedValues from './AnimatedValues/AnimatedValues'
import styles from './DrawResult.module.css'
import ResultPhrase from './ResultPhrase/ResultPhrase'
import { startDrawAnimation } from '../../store/features/animation/animation.service'
import { drawSlice } from '../../store/features/draw/draw.slice'
import { RootState } from '../../store/store'

export interface DrawResultProps {
  slug: string
}

export const DrawResult = ({ slug }: DrawResultProps) => {
  const dispatch = useDispatch()
  const draw = useSelector((state: RootState) => state.draw)
  const animation = useSelector((state: RootState) => state.animation)

  useEffect(() => {
    ;(async () => {
      // Load draw from slug
      if (draw.draw.values.length === 0) {
        dispatch(drawSlice.actions.loadFromSlug(slug))
      }
      // If the animation has not started yet and has not run yet, we start it
      else if (typeof draw.draw.drawnIndex === 'number' && !animation.started && !animation.ended) {
        await startDrawAnimation(draw.draw)
      }
    })()
  }, [draw, animation, slug, dispatch])

  // If error
  if (draw.hasError) {
    return (
      <div className={styles.error}>
        <p>
          <Image src="/sad.jpg" alt="Sad cat drawing" width={250} height={161} />
        </p>
        <p>Impossible de charger le tirage au sort à partir de cette url...</p>
      </div>
    )
  }

  const { values, drawnIndex } = draw.draw

  // If the draw has not been loaded yet
  if (!values.length) {
    return null
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
