import Head from 'next/head'
import { WithTranslation, withTranslation } from 'react-i18next'

import Footer from './Footer'
import Header from './Header/Header'
import styles from './Layout.module.css'

interface LayoutProps {
  children: React.ReactNode
}
const Layout: React.FC<WithTranslation & LayoutProps> = ({ children, t }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="theme-color" content="#4cb4ff" />
      {/* Tell the browser it's a PWA */}
      <meta name="mobile-web-app-capable" content="yes" />
      {/* Tell iOS it's a PWA */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      {/* https://developer.mozilla.org/en-US/docs/Web/Manifest */}
      <link rel="manifest" href="/manifest.webmanifest" />
      <link rel="shortcut icon" href="/favicon.ico" />

      <title>{t('application.title')}</title>
      <meta name="description" content={t('application.description')} />
      <meta name="keywords" content={t('application.keywords')} />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossOrigin="anonymous"
      />
    </Head>
    <div className={styles.main}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  </>
)
export default withTranslation()(Layout)
