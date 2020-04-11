import React from 'react'
import Router from 'next/router'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import '../styles.css'

import store from '../redux/store'

Router.events.on('routeChangeComplete', () => {
  window.scrollTo(0, 0)
})

// This default export is required in a new `pages/_app.js` file.
const App: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
)

export default App
