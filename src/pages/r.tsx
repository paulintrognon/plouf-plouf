import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from '../components/Layout/Layout'
import DrawResult from '../components/DrawResult/DrawResult.connect'

const DrawPage: React.FunctionComponent = () => {
  const router = useRouter()
  const slug = router.asPath.slice(3)

  return (
    <Layout>
      <Head>
        <title>test</title>
        <meta name="robots" content="noindex" />
      </Head>
      <DrawResult slug={slug} />
    </Layout>
  )
}

export default DrawPage
