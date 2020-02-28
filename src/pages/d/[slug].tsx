import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout/Layout'
import DrawResult from '../../components/DrawResult/DrawResult.connect'

const DrawPage = () => {
  const router = useRouter()
  const { slug } = router.query
  return (
    <Layout>
      <DrawResult slug={slug} />
    </Layout>
  )
}

export default DrawPage
