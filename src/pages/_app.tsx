import { AppProps } from 'next/app'
import Router from 'next/router'
import React from 'react'
import { Provider } from 'react-redux'
import '../styles.css'

import { store } from '../store/store'

Router.events.on('routeChangeComplete', () => {
  window.scrollTo(0, 0)
})

// This default export is required in a new `pages/_app.js` file.
const App = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
)

export default App
