import React from 'react'
import { Provider } from 'react-redux'
import '../styles.css'

import store from '../redux/store'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
