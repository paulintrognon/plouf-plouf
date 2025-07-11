import { AppProps } from 'next/app'
import Router from 'next/router'
import React from 'react'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'

import '../styles.css'
import i18n from '../i18n'
import { store } from '../store/store'

Router.events.on('routeChangeComplete', () => {
  window.scrollTo(0, 0)
})

// This default export is required in a new `pages/_app.js` file.
const App = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <I18nextProvider i18n={i18n} defaultNS={'translation'}>
      <Component {...pageProps} />
    </I18nextProvider>
  </Provider>
)

export default App
