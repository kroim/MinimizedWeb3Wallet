import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core'
import React, { StrictMode } from 'react'
import { isMobile } from 'react-device-detect'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { NetworkContextName } from './constants'
import App from './pages/App'
import store from './state'
import ThemeProvider, { FixedGlobalStyle, ThemedGlobalStyle } from './theme'
import getLibrary from './utils/getLibrary'

const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName)

if ('ethereum' in window) {
  (window.ethereum as any).autoRefreshOnNetworkChange = false
}

const GOOGLE_ANALYTICS_ID: string | undefined = process.env.REACT_APP_GOOGLE_ANALYTICS_ID
if (typeof GOOGLE_ANALYTICS_ID === 'string') {
  ReactGA.initialize(GOOGLE_ANALYTICS_ID)
  ReactGA.set({
    customBrowserType: !isMobile ? 'desktop' : 'web3' in window || 'ethereum' in window ? 'mobileWeb3' : 'mobileRegular'
  })
} else {
  ReactGA.initialize('test', { testMode: true, debug: true })
}

window.addEventListener('error', error => {
  ReactGA.exception({
    description: `${error.message} @ ${error.filename}:${error.lineno}:${error.colno}`,
    fatal: true
  })
})

ReactDOM.render(
  <StrictMode>
    <FixedGlobalStyle />
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
        <Provider store={store}>
          <ThemeProvider>
            <ThemedGlobalStyle />
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ThemeProvider>
        </Provider>
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  </StrictMode>,
  document.getElementById('root')
)
