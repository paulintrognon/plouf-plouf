import Head from 'next/head'
import styles from './Layout.module.css'
import Header from './Header/Header.connect'
import Footer from './Footer'

const Layout: React.FC = ({ children }) => (
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

      <title>Plouf, plouf ! Tirage au sort en ligne</title>
      <meta
        name="description"
        content="Plouf plouf est un outil de tirage au sort en ligne avec partage du résultat. Tirage aléatoire parmi une liste de mots."
      />
      <meta
        name="keywords"
        content="plouf plouf, tirage au sort, tirer au sort, tirer au hasard,en ligne"
      />
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
export default Layout
