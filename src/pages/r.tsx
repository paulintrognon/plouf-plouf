import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'

import DrawResult from '../components/DrawResult/DrawResult'
import Layout from '../components/Layout/Layout'

const DrawPage: React.FC<WithTranslation> = ({ t }) => {
  const router = useRouter()
  const slug = router.asPath.slice(3)

  return (
    <Layout>
      <Head>
        <title>{t('result.title')}</title>
        <meta name="description" content={t('result.description')} />
        <meta name="robots" content="noindex" />
      </Head>
      <DrawResult slug={slug} />
    </Layout>
  )
}

export default withTranslation()(DrawPage)
