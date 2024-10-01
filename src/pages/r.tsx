import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

import DrawResult from '../components/DrawResult/DrawResult'
import Layout from '../components/Layout/Layout'

const DrawPage = () => {
  const router = useRouter()
  const slug = router.asPath.slice(3)

  return (
    <Layout>
      <Head>
        <title>Plouf Plouf&nbsp;: résultat de votre tirage au sort</title>
        <meta name="robots" content="noindex" />
      </Head>
      <DrawResult slug={slug} />
    </Layout>
  )
}

export default DrawPage
