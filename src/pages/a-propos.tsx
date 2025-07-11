import Head from 'next/head'
import { WithTranslation, withTranslation } from 'react-i18next'

import About from '../components/About/About'
import Layout from '../components/Layout/Layout'

const ImportPage: React.FC<WithTranslation> = ({ t }) => (
  <Layout>
    <Head>
      <title>{t('about.title')}</title>
      <meta name="description" content={t('about.description')} />
    </Head>
    <About />
  </Layout>
)

export default withTranslation()(ImportPage)
